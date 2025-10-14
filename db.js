import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://YahirA:Yahir123%3F@cluster0.e8ft3f0.mongodb.net/";

export const conectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Mongo db connectedsuccesfully");
  } catch (error) {
    console.error("Mongo db conection failed", error);
  }
};
