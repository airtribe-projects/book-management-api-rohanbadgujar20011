const Book = require("../Models/Book");

exports.createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      publicationDate,
      pages,
      price,
      createdAt,
      updatedAt,
    } = req.body;
    const newBook = new Book({
      title,
      author,
      publicationDate,
      pages,
      price,
      createdAt,
      updatedAt,
    });
    const createdBook = await newBook.save();
    return res.status(201).json({ success: true, data: createdBook });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create message",
      error: error.message,
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    return res.status(201).json({ success: true, data: allBooks });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create message",
      error: error.message,
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const specificBook = await Book.findById(id);

    if (!specificBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: specificBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve the book",
      error: error.message,
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publicationDate, pages, price } = req.body;

    // Find the book by ID and update it with the new data
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        publicationDate,
        pages,
        price,
        updatedAt: Date.now(), // Update the 'updatedAt' field
      },
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update book",
      error: error.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the book by ID and delete it
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Book successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete book",
      error: error.message,
    });
  }
};
