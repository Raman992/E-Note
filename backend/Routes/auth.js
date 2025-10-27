const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SIGNATURE = 'Londonstop';

// Route: POST /api/auth . / No login required.
router.post(
  '/',
  [
    body('name', 'Invalid Name').isLength({ min: 4 }),
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      
      // Checking for duplicate email user
      let ExistingUser = await User.findOne({ email: req.body.email });
      if (ExistingUser) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
      }
      //Creating hash password
        const salt = await bcrypt.genSalt(10);
        const bcryptedpass = await bcrypt.hash(req.body.password , salt);
      
        //Creating a new user in database
      const user = await User.create({
        name: req.body.name,
        password: bcryptedpass,
        email: req.body.email
      });
      //Creating jwt payload
      const data = {
        user: {
          id: user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SIGNATURE);
      //Sent success code with user authentication token
      res.status(200).json({ message: 'User created successfully', authtoken });
    } catch (error) {
      res.status(500).json({ error: error.message }); //Error msg on body
    }
  }
);

module.exports = router;
