const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.render("index");
});
app.get("/pagina", function(req, res){
    res.send("pagina 2");
});
app.post("/", function(req, res){
    res.send("Hello, World via post!!!");
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))

