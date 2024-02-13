const express = require("express");
const app = express();
const axios = require("axios")
require("dotenv").config();
let dbConnect = require("./dbConnect");

// parse requests of content-type - application / json;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my SQL application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

let likeRoutes = require("./routes/likeRoutes");
app.use("/api/likes", likeRoutes);

let commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

let cartoonRoutes = require("./routes/cartoonRoutes");
app.use("/api/cartoon", cartoonRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
