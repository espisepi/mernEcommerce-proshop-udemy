// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');
import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json()) // Para poder recibir json en el body

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

/* Middleware, this code always in final */
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;  // Thanks to dotenv package

app.listen(PORT, console.log(`Server running in ${ process.env.NODE_ENV } on port ${ PORT }`));



/** This code is old and now is in productRoutes 

    import products from './data/products';
    app.get('/api/products', (req, res) => {
        res.json(products);
    });
    app.get('/api/products/:id', (req, res) => {
        const product = products.find( p => p._id === req.params.id);
        res.json(product);
    });

*/