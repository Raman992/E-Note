import React, { useState, useContext, useEffect } from 'react';
import NoteContext from '../context/notes/noteContext';
import './CSS/editmodal.css';

const EditModal = ({ show, onClose, note }) => {
    const { updateNotes } = useContext(NoteContext);

    const [form, setForm] = useState({
        name: '',
        description: '',
        tag: 'default',
    });

    useEffect(() => {
        if (show && note) {
            setForm({
                name: note.name || '',
                description: note.description || '',
                tag: note.tag || 'default',
            });
        }
    }, [show, note]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateNotes(form.name, form.description, form.tag, note._id);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Edit Note</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Note Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            rows="3"
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tag"
                            value={form.tag}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                        <button type="button" className="btn mx-2" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;