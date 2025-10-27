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

app.put("/updateCard/:id", async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      overwrite: true,
    });
    if (!card) return res.status(404).send("Card not found");
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating card");
  }
});

app.patch("/updateCard/:id", async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!card) return res.status(404).send("Card not found");
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error partially updating card");
  }
});

app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);
    if (!card) return res.status(404).send("Card not found");
    res.status(200).send("Card deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting card");
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
