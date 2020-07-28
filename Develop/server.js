const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// const indexJS = require("./public/assets/js/index");
const dbJson = require("./db.json");

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const allNotes = {
//     // "test": fs.readFile("db.json", "utf-8", function (err, data) {
//     //     if (err) {
//     //         console.log(er);
//     //     } else {
//     //         console.log("db read succesfully!")
//     //     }
//     // })
//     "test1": "test1 response",
//     "test2": "test2 response"
// };

// const dbNotes = fs.readFile("db.json", "utf-8", function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("dbData: ", data);
//         const allNotes = data[0];
//         console.log(allNotes);
//     }

// });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    console.log("entered index.html")
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
    console.log("entered notes.html");
});

app.get("/api/notes", function (req, res) {
    return res.json(dbJson[0]);
});