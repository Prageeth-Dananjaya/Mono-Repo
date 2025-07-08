export const getAllNotes = (req, res) => {
  res.status(200).send("You just fetched the notes");
};

export function createANote(req, res) {
  res.status(201).json({ message: "Post created successfully!" });
}

export function updateANote(req, res) {
  res.status(200).json({ message: "Post updated successfully!" });
}

export function deleteANote(req, res) {
  res.status(200).json({ message: "Post deleted successfully!" });
}
