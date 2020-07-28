const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,  "/public/index.html"));
    console.log("entered index.html")
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    console.log("entered notes.html");
});

app.get("/api/notes", function (req, res) {
    fs.readFileSync("db.json", function(err, data) {
        if (err) {
            throw err;
        } else {
            const noteField = JSON.parse(data);
            res.json(noteField);
        }
        
    })
});

app.post("/api/notes", function (req, res) {
    const dbNote = req.body;
    fs.readFile("db.json", function (err, data) {
        if (err) {
            throw err;
        } else {
            const noteField = json.parse(data);
            noteField.push(dbNote);
        }
    });

    fs.writeFile("db.json", JSON.stringify(dbNote), function (err) {
        if (err) {
            throw err;
        } else {
            res.json(dbNote);
        }
    });
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});