import {Author} from "../../../dataBase/models/author.model.js"


// POST request to create a new author.

export const createAuthor = async (req, res) => {
    const newAuthor = await Author.create(req.body);
    res.status(201).json({ message: 'Author created successfully', author: newAuthor });
}

// GET request to get all authors.

export const getAllAuthors = async (req, res) => {
    const pageNumber = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 4; 
    const authors = await Author.find().populate('wroteBooks', 'title').skip((pageNumber - 1) * pageSize).limit(pageSize);
    if (authors.length === 0) { 
        return res.status(404).json({ message: 'No authors found' });
    }
    res.status(200).json({ message: "all authors retrieved successfully", authors });
}

// GET request to get a author by id.

export const getAuthorById = async (req, res) => {
    const author = await Author.findById(req.params.id).populate('wroteBooks', 'title').populate('books', 'title');
    if (!author) { 
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ message: "author retrieved successfully", author });
}

// PATCH request to update a author by id.

export const updateAuthor = async (req, res) => {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('wroteBooks', 'title');
    if (!updatedAuthor) { 
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ message: "author updated successfully", author: updatedAuthor });
}

// DELETE request to delete a author by id.

export const deleteAuthor = async (req, res) => {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id).populate('wroteBooks', 'title');
    if (!deletedAuthor) { 
        return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ message: "author deleted successfully", author: deletedAuthor });
}

// GET request to search by either bio or name.

// *! to not violate the open closed principle.


export const search = async (req, res) => {
    const query = req.params.query.trim();
    const validQueries = ['bio', 'name'];
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

    const authors = await Author.find({}, field);
    if (!authors || authors.length === 0) {
        return res.status(404).json({ message: 'No authors found' });
    }
    res.status(200).json({ message: 'Authors retrieved successfully', authors });
};



