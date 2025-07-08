import express from "express";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB();

// app.get("/api/notes", (req, res) => {
//   res.status(200).send("you got 10 notes");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "post created successfully!" });
// });

// app.put("api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Post updated successfully!" });
// });
// app.delete("api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "Post deleted successfully!" });
// });

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
