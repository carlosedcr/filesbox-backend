const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET= Busca alguma informação da api;
//POST= Criar alguma coisa;
//PUT= Editar;
//DELETE= Deletar;

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);

/* routes.get('/teste', (req, res) => {
     return res.send('Hello mundos'); 
 }); //rota que o cliente irá acessar. req= request para o servidor. res= resposta que irá voltar.
*/

module.exports = routes; //exporta a variavel routes.