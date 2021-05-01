const express = require('express');

const authorRouter = express.Router();

const authorController = require('../controllers/authorController.js');


authorRouter.get('/', authorController.getAllAuthors);
authorRouter.get('/:id', authorController.getAuthorsByID);
authorRouter.post('/', authorController.addAuthor);

module.exports = authorRouter;

