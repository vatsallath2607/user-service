const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🔥 CI/CD WORKING PERFECTLY 🚀");
});

// VERY IMPORTANT LINE
app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});