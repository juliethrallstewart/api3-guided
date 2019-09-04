const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).json({ api: 'up...' });
});

// routes

const suppliersRouter = require('../suppliers/suppliers-router');
server.use('/suppliers', suppliersRouter);
module.exports = server;

// RESOURCES

// products

// clients

// orders

// suppliers
