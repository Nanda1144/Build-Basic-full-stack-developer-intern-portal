const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const dummyUser = {
  name: "Sarah Kapoor",
  referralCode: "sarah2025",
  donationsRaised: 12500
};

const dummyLeaderboard = {
  data: [
    { name: "Sarah Kapoor", donations: 12500 },
    { name: "Aman Mehra", donations: 10500 },
    { name: "Neha", donations: 8000 }
  ]
};

app.get('/user', (req, res) => {
  res.json(dummyUser);
});

app.get('/leaderboard', (req, res) => {
  res.json(dummyLeaderboard);
});

app.listen(port, () => {
  console.log(`Mock backend running at http://localhost:${port}`);
});
