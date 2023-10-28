import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils";
const app = express();

app.engine("handlebars", handlebars.engine());

app.set("views", __dirname + "/views");

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const server = app.listen(8080, () => console.log("Listening 8080"))