const express = require('express');

const authorRouter = express.Router();

const authorController = require('../controllers/authorController.js');


authorRouter.get('/', authorController.getAllAuthors);
authorRouter.get('/:authorId', authorController.getOneAuthor);
authorRouter.post('/', authorController.addAuthor);

module.exports = authorRouter;

