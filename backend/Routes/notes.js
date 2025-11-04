const express = require('express');
const router = express.Router();
const fetchuser = require('../Middleware/fetchuser');
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
const Notes = require('../Models/Notes');

//Route 1 get notes : GET method / '/api/notes/fetchnotes' . login req
router.get('/fetchnotes', fetchuser, async (req, res) => {

    try {
        const fetchednotes = await Notes.find({ user: req.user.id })
        res.json(fetchednotes)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Sorry, an internal server error occurred" });
    }
});

//Route 2 new notes : POST method / '/api/notes/createnotes' . login req
router.post('/createnotes', fetchuser, [
    body('name', 'Name should be valid').isLength({ min: 3 }),
    body('description', 'Description is too small').isLength({ min: 6 })],
    async (req, res) => {
        try {
            const { name, description, tag } = req.body
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = await new Notes({
                name, description, tag, user: req.user.id
            }).save();

            res.json(note);

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: "Sorry, an internal server error occurred" });
        }
    });

//Route 3 delete notes : DELETE method / '/api/notes/deletenotes' . login req
router.delete('/deletenotes/:id', fetchuser,
    async (req, res) => {
        try {
            const id = req.params.id;
            let note = await Notes.findById(id);
            if (!note) { return res.status(404).send("Not Found") };

            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndDelete(id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: "Sorry, an internal server error occurred" });
        }
    });

//Route 4 update notes : PUT method / '/api/notes/updatenotes' . login req
router.put('/updatenotes/:id', fetchuser,
    async (req, res) => {
        try {
            const id = req.params.id;
            const { name, description, tag } = req.body
            const newNote = {};
            if (name) { newNote.name = name };
            if (description) { newNote.description = description };
            if (tag) { newNote.tag = tag };
            let note = await Notes.findById(id);
            if (!note) { return res.status(404).send("Not Found") }

            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndUpdate(id, { $set: newNote }, { new: true })
            const savedNotes = await note.save();
            res.json({ message: "Note saved successfully", note: savedNotes });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: "Sorry, an internal server error occurred" });
        }
    });

module.exports = router