const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

