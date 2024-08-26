const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../Controllers/bookController");

router.post("/books", createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
