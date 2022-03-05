// post (create note)
// delete (delete note when task is complete)

const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../../helpers/fsUtils");

// GET Route for retrieving all the feedback
router.get("/notes", (req, res) =>
  readFromFile("./Develop/db/db.json").then((data) =>
    res.json(JSON.parse(data))
  )
);

// POST Route for submitting feedback
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

    readAndAppend(newNote, "./Develop/db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting note");
  }
});

module.exports = router;
