import mongoose from "mongoose";

const stdetsSchema = new mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: true,
      trim: true,
    },
    Apellido: {
      type: String,
      required: true,
      trim: true,
    },
    Edad: {
      type: Number,
      required: true,
      min: 0,
    },
    Sexo: {
      type: String,
      enum: ["M", "F", "Otro"], // solo acepta estas opciones
      required: true,
    },
    Calificacion: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt
    collection: "Students", // fuerza el nombre exacto de la colección
  }
);

export const Students = mongoose.model("Students", stdetsSchema);
