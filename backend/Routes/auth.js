const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../Middleware/fetchuser');

const JWT_SIGNATURE = 'testing';

// Route 1: POST /api/auth/createuser - Create a new user
router.post(
  '/createuser',
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
      // Check for existing user
      let existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: "Sorry, a user with this email already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // Create new user
      const user = await User.create({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
      });

      // Generate token
      const data = {
        user: { id: user.id },
      };
      const authtoken = jwt.sign(data, JWT_SIGNATURE);

      res.status(200).json({ message: 'User created successfully', authtoken });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Route 2: POST /api/auth/login - Authenticate a user
router.post(
  '/login',
  [
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Password cannot be empty').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).json({ errors: "Incorrect email or password" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(400).json({ errors: "Incorrect email or password" });
      }

      // Generate token
      const data = {
        user: { id: existingUser.id },
      };
      const authtoken = jwt.sign(data, JWT_SIGNATURE);

      res.status(200).json({ message: 'Login successful', authtoken });
    } catch (error) {
      res.status(500).json({ error: "Internal server error: " + error.message });
    }
  }
);

// Route 3: POST /api/auth/getuser - Get logged-in user details
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.userdata.id;
    const userData = await User.findById(userId).select("-password");
    console.log("Sending response now...");

    res.send(userData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Sorry, an internal server error occurred" });
  }
});

module.exports = router;
