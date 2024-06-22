import { Router } from "express";
import { createNewBook, getAllBooks, getBookById, updateBook, deleteBook, search } from './book.controller.js';


export const bookRouter = Router();

bookRouter.post("/createNewBook", createNewBook);
bookRouter.get("/getAllBooks", getAllBooks);
bookRouter.get("/getBookById/:id", getBookById);
bookRouter.patch("/updateBook/:id", updateBook);
bookRouter.delete("/deleteBook/:id", deleteBook);
bookRouter.get('/search/:query', search);

