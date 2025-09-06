const express = require('express');
const raizControllers = require('./controllers/raizControllers');
const userControllers = require('./controllers/userControllers');
const imageController = require('./controllers/imageController');
const authorization = require('./middleware/authorization');


const routes = express.Router();


routes.get('/',raizControllers.raiz);
routes.get('/user', authorization , userControllers.searchUsersAll)
routes.post('/user', authorization, userControllers.create);
routes.post('/userauth', userControllers.searchUsers);
// Rotas para imagens
routes.post('/images', imageController.createImg);
routes.get('/images', imageController.searchImagensAll); 

module.exports = routes;


