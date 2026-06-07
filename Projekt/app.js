const express = require("express");

const app = express();

const taskRoutes = require("./routes/taskRoutes");
const defaultRoutes = require("./routes/defaultRoutes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", defaultRoutes);
app.use("/tasks", taskRoutes);

app.listen(3000, () => {
    console.log("Serwer działa na porcie 3000");
});