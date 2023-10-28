require("dotenv").config();
const express = require("express");
const app = express();
const connectdb = require("./config/db");
connectdb()
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

