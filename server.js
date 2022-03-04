const express = require("express");
const path = require("path");
const apiRoutes = require("./Develop/routes/apiRoutes");

//MAKE THESE API ROUTES FOR THE FRONTEND DEVELOPER
//const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TODO: What is my api equivalent here?
//app.use("/api", api);

app.use(express.static("public"));
// res.json() allows us to return JSON instead of a buffer, string, or static file
//return the `notes.html` file
app.get("/notes"),
  (req, res) => res.sendFile(path.join(__dirname, "/public/notes.html"));
//GET route for home page
app.get("/"),
  (req, res) => res.sendFile(path.join(__dirname, "public/index.html"));

// Fallback route for when a user attempts to visit routes that don't exist
//return the `index.html` file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//send file - get a note and it does something with the data (make data flow across channels)
//app.get("/api/notes", (req, res) =>
//res.send("Visit http://localhost:3001/api")
//);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
