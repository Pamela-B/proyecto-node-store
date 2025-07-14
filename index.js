import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productsRouter from './src/routers/products.router.js';
import loginRouter from './src/routers/auth.router.js';
import {authentication} from "./src/middlewares/authentication.js";

const app = express()
const corsOptions = {
    origin: ['https://test.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/products', authentication, productsRouter);
app.use('/auth', loginRouter);


app.use((req, res) => {
    res.status(404).json({error: "Not Found"});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));