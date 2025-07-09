import Note from "../../models/Note.js";

export async function getAllNotes(_, res) {
  // _ were since req is not used within the controller
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //newest first (default = 1)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes cobtroller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createANote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title: title, content: content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createANote controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateANote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedContent = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedContent)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updatedContent);
  } catch (error) {
    console.error("Error in updateANotecontroller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteANote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteANode controller");
    res.status(200).json({ message: "Internal server error" });
  }
}

export async function getANote(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getANode controller");
    res.status(200).json({ message: "Internal server error" });
  }
}
