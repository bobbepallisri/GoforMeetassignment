const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// GET route to fetch all profiles sorted by location
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ location: 1 }); // 1 for ascending order, -1 for descending
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
