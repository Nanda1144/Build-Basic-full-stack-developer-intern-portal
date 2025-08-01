// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Dummy intern data
const internData = {
  name: "John Doe",
  referralCode: "johndoe2025",
  totalDonations: 15000,
  rewards: [
    "T-shirt unlocked", 
    "Certificate unlocked", 
    "Meeting with Founder (locked)"
  ]
};

// Define an API endpoint
app.get('/api/intern', (req, res) => {
  res.json(internData);
});

// Optional: Leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "John Doe", donations: 15000 },
    { name: "Jane Smith", donations: 12000 },
    { name: "Alex Roy", donations: 10000 }
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
