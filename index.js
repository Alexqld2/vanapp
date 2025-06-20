const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3001;

app.use(cors());

const vans = [
  {
    id: "van1",
    name: "Byron Beach Cruiser",
    location: "Byron Bay",
    seats: 2,
    pricePerDay: 120,
    image: "https://i.imgur.com/a1v1a1v.jpg"
  },
  {
    id: "van2",
    name: "Sydney Surfwagon",
    location: "Sydney",
    seats: 4,
    pricePerDay: 150,
    image: "https://i.imgur.com/b2v2b2v.jpg"
  },
  {
    id: "van3",
    name: "Gold Coast Explorer",
    location: "Gold Coast",
    seats: 2,
    pricePerDay: 110,
    image: "https://i.imgur.com/c3v3c3v.jpg"
  }
];

app.get('/api/vans', (req, res) => {
  res.json(vans);
});

app.use('/', express.static(__dirname + '/frontend'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
