// post (create note)
// delete (delete note when task is complete)

const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// GET Route for retrieving all the notes
router.get("/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
router.post("/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting note.");
  }

  //DELETE ROUTE

  // router.delete("/api/notes/:id", (req, res) => {
  //   const { id } = res.id;

  //   if (id) {
  //     const newNote = {
  //       title,
  //       text,
  //       id: uuidv4(),
  //     };

  //     handleNoteDelete(newNote, "./Develop/db/db.json");

  //     const response = {
  //       status: "success",
  //       body: {},
  //     };

  //     res.json(response);
  //   }
  // });
});

module.exports = router;
