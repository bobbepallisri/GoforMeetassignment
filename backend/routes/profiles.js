const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile'); // Adjust path if necessary

// GET route to fetch all profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ location: 1 }); // Sort profiles by location
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// POST route to create a new profile
router.post('/profiles', async (req, res) => {
  const { name, age, location, profession } = req.body;
  try {
    const newProfile = new Profile({ name, age, location, profession });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

module.exports = router;
