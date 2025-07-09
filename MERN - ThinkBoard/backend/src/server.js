import express from "express";
// const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
//  * Can be use for auth check before sending the response back
//  * Can be use for rate limiting (upstash)=>  avoid larger no requests by malicious users
//This middleware will parse JSON bodies
app.use(express.json()); // allow access to the request body

// app.use((req, res, next) => {
//   console.log(`Request method is ${req.method} and request URL is ${req.url}`);
//   next(); // This will call the controller and just before send a request log will be printed
// });

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

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

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
  });
});
