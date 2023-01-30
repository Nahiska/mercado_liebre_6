const express = require("express");
const path = require("path");
const app = express();
const PORT = 3050;

app.use(express.static("public"));

app.get("/", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/home.html"));
   //    resolve("views", "home.html")
})

app.get("/home", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/home.html"));
   //    resolve("views", "home.html")
})

app.get("/register", (req, res) => {
   return res.sendFile(path.join(__dirname, "views/register.html"));
})

app.get("/login", (req, res) => {
   return res.sendFile(path.join(__dirname, "views/login.html"));
})


app.listen(PORT, () => console.log(`
Server listen in port ${PORT}
http://localhost:${PORT}
`))
