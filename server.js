const express = require("express");
const path = require("path");
const route = require("./Develop/routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", route);

app.use(express.static("public"));
// res.json() allows us to return JSON instead of a buffer, string, or static file
//return the `notes.html` file

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"))
);

//GET route for home page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);

// Fallback route for when a user attempts to visit routes that don't exist
//return the `index.html` file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "Develop/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
