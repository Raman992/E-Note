const express = require('express');
const router = express.Router();
const User = require('../Models/User');
// Route 1: Test endpoint
router.get('/', (req, res) => {
  console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
});

module.exports = router;
