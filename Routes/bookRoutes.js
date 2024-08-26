const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../Controllers/bookController");
const { verifyToken } = require("../Middleware/authMiddleware");
router.post("/books", verifyToken, createBook);
router.get("/books", verifyToken, getAllBooks);
router.get("/books/:id", verifyToken, getBookById);
router.put("/books/:id", verifyToken, updateBook);
router.delete("/books/:id", verifyToken, deleteBook);

module.exports = router;
