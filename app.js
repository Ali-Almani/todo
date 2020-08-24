import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import db from './db/db';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.get('/api/v1/todos', (req, res) => {
res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
    })    
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});