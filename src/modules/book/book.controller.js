import { Book } from "../../../dataBase/models/book.model.js"


// POST request to create a new book.


export const createNewBook = async (req, res) => {
    const newBook = await Book.create(req.body);
    res.status(201).json({message: 'Book created successfully', book: newBook });
}

// GET request to get all books.

export const getAllBooks = async (req, res) => { 
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 4;
    const books = await Book.find().skip((pageNumber - 1) * pageSize).limit(pageSize);
    if (books.length === 0) { 
        return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json({ message: "all books retrieved successfully", books });
}

// GET request to get a book by id.

export const getBookById = async (req, res) => { 
    const book = await Book.findById(req.params.id);
    if (!book) { 
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: "book retrieved successfully", book });
}

// PATCH request to update a book by id.

export const updateBook = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) { 
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: "book updated successfully", book: updatedBook });
}

// DELETE request to delete a book by id.

export const deleteBook = async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) { 
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: "book deleted successfully", book: deletedBook });
}



// GET request to search by either title or author.


// *! to not violate the open closed principle.

export const search = async (req, res) => {
    const query = req.params.query.trim();
    const validQueries = ['title', 'author'];
    let field;

    for (let i = 0; i < validQueries.length; i++) {
        if (query === validQueries[i]) {
            field = validQueries[i];
            break;
        }
    }

    if (!field) {
        return res.status(400).json({ message: 'Invalid query parameter' });
    }

    const books = await Book.find({}, field);
    if (!books || books.length === 0) {
        return res.status(404).json({ message: 'No books found' });
    }
    res.status(200).json({ message: 'Books retrieved successfully', books });
};
