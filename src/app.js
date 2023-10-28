import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
const app = express();

//Inicilizamos el motor de plantilla
app.engine("handlebars", handlebars.engine());
//Indicamos en donde están las vistas
app.set("views", __dirname + "/views");
//Indicamos que motor de plantillas a usar
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {
        name: "Dario Miguel",
        title: "My primer pagina con handlebars"
    })

})

const server = app.listen(8080, () => console.log("Listening 8080"))