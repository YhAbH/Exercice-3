import express from "express";
import { conectDB } from "./db.js";
import { Card } from "./models/Card.js";
const app = express();
conectDB();
//app representa el sevidor

app.use(express.json());

app.post("/createCard", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});
app.get("/getAllCards", async (req, res) => {
  try {
    const card = await Card.find();
    res.status(200).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});
app.get("/getCard/:id", async (req, res) => {
  try {
    const card = await Card.find();
    res.status(200).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});

app.post("/cards", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card).send("Card created succesfully");
  } catch (error) {
    console.error(error);
  }
});
app.post("/send", (req, res) => {
  const { user, email, password } = req.body;
  //por default esta es una destructuracion JSON
  //{"user": "unUsuario"}
  //"email" "un email"
  console.log("Datos recibidos: " + user + "" + email);
  res.status(200).send("Data recived succesfuly");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World from Node.js");
});
app.get("/Hola", (req, res) => {
  res.status(200).send("Hola mundo desde Node.js");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
