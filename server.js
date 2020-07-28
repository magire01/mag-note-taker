const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
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
    const note = req.body;
    const id = parseInt(req.params.id);
    fs.readFile("db.json", function (err, data) {
        if (err) {
            throw err;
        } else {
            const noteField = JSON.parse(data);
            noteField.id = noteField.length - 1;
            noteField.push(note);
        }
    });

    fs.writeFile("db.json", JSON.stringify(note), function (err, data) {
        if (err) {
            throw err;
        } else {
            res.json(note);
        }
    });
});

app.post("/api/notes/:id", function (req, res) {
    const id = parseInt(req.params.id);
    fs.readFile("db.json", function (err, data) {
        if (err) {
            throw err;
        } else {
            const noteField = JSON.parse(data);
            noteField.id = noteField.length - 1;
            noteField.push(note);
        }
    });

    fs.writeFile("db.json", JSON.stringify(note), function (err, data) {
        if (err) {
            throw err;
        } else {
            res.json(note);
        }
    });


})


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});