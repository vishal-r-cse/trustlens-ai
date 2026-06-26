const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/verify", (req, res) => {
  const { news } = req.body;

  const fakeKeywords = [
    "shocking",
    "100%",
    "miracle",
    "secret",
    "viral",
    "click here",
    "free money",
    "breaking",
  ];

  let fakeScore = 0;

  fakeKeywords.forEach((word) => {
    if (news.toLowerCase().includes(word)) {
      fakeScore++;
    }
  });

  if (fakeScore >= 2) {
    return res.json({
      status: "Likely Fake",
      confidence: 95,
    });
  }

  return res.json({
    status: "Likely Genuine",
    confidence: 91,
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});