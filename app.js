const express = require("express");
const app = express();
const path = require("path");
const routerMain = require("./routers/main");
const routerAbout = require("./routers/about");

const publicFolder = path.resolve(__dirname, "./public");
app.use(express.static(publicFolder));

app.use("/", routerMain);
app.use("/about", routerAbout);

app.listen(5000, () => {
  console.log("Server running");
});
