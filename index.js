import express from 'express';
import { dbConnection } from './dataBase/dbConnection.js';
import { bookRouter } from './src/modules/book/book.routes.js';
import { authorRouter } from './src/modules/author/author.routes.js';
const app = express()
const port = 3000

app.use(express.json());

app.use('/authors', authorRouter);
app.use('/books', bookRouter);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))