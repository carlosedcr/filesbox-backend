const express = require('express'); //importa o express instalado.
const mongoose = require('mongoose'); //improta o mongoose.
const path = require('path');
const cors = require('cors');

const app = express(); //define a constante app, que guarda todas as iformações da aplicação.

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect('mongodb+srv://bduser:bduser@cluster0-brxh8.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
}); // conecta no mongodb atlas;

app.use((req, res, next) => {
    req.io = io;

    return next();
});


app.use(express.json()); //cadastra um modulo. json retorna dados para o bd.
app.use(express.urlencoded({ extended: true})); //permite o upload de arquivos.
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(require('./routes')); //utiliza o arquivos de rotas.

server.listen(process.env.PORT || 3333); //define a porta.

