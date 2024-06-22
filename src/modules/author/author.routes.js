import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, search } from './author.controller.js';


export const authorRouter = Router();

authorRouter.post("/createAuthor", createAuthor)
authorRouter.get("/getAllAuthors", getAllAuthors)
authorRouter.get("/getAuthorById/:id", getAuthorById)
authorRouter.patch("/updateAuthor/:id", updateAuthor)
authorRouter.delete("/deleteAuthor/:id", deleteAuthor)
authorRouter.get('/search/:query',search)

