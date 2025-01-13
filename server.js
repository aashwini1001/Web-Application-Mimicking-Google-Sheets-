const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const saveFile = (data) => {
  fs.writeFileSync("spreadsheet.json", JSON.stringify(data, null, 2));
};

const loadFile = () => {
  try {
    const data = fs.readFileSync("spreadsheet.json");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Save spreadsheet
app.post("/save", (req, res) => {
  saveFile(req.body.data);
  res.send({ message: "Spreadsheet saved!" });
});

// Load spreadsheet
app.get("/load", (req, res) => {
  const data = loadFile();
  res.send({ data });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
