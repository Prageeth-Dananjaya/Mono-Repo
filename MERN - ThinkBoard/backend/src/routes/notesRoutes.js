import express from "express";
import {
  createANote,
  deleteANote,
  getAllNotes,
  updateANote,
  cl,
} from "../controllers/noteController";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createANote);

router.put("/:id", updateANote);

router.delete("/:id", deleteANote);

export default router;
