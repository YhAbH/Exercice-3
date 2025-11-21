import express from "express";
import { conectDB } from "./db.js";
import { Card } from "./models/Card.js";
import cors from "cors";
import { Students } from "./student.js";
const app = express();
conectDB();
//app representa el sevidor

app.use(express.json());
app.use(cors());
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
    const card = await Card.findById(req.params.id); // ✅ Busca solo por id
    if (!card) return res.status(404).send("Card not found");
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching card");
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
    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting card" });
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
app.get("/endpoints", (req, res) => {
  const template = [
    {
      path: "https://exercice-3-1.onrender.com/createCard",
      method: "POST",
      description: "Crea una nueva tarjeta en la base de datos",
    },
    {
      path: "https://exercice-3-1.onrender.com/getAllCards",
      method: "GET",
      description: "Obtiene todas las tarjetas",
    },
    {
      path: "https://exercice-3-1.onrender.com/getCard/:id",
      method: "GET",
      description: "Obtiene una tarjeta por su ID",
    },
    {
      path: "https://exercice-3-1.onrender.com/updateCard/:id",
      method: "PUT",
      description: "Actualiza completamente una tarjeta por su ID",
    },
    {
      path: "https://exercice-3-1.onrender.com/updateCard/:id",
      method: "PATCH",
      description: "Actualiza parcialmente una tarjeta por su ID",
    },
    {
      path: "https://exercice-3-1.onrender.com/deleteCard/:id",
      method: "DELETE",
      description: "Elimina una tarjeta por su ID",
    },
  ];

  res.json(template);
});

// Crear un registro
app.post("/Students", async (req, res) => {
  try {
    const students = await Students.create(req.body);
    res.status(201).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating student");
  }
});

// Obtener todos
app.get("/Students", async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching students");
  }
});
// Obtener un estudiante por su ID
app.get("/Students/:id", async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(student);
    a;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching student");
  }
});
