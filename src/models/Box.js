const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: { //atributo title do tipo string.
        type: String,
        required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }] // um box tem varios files.
    }, 
    {
        timestamps: true //cria um campo criado e atualizado.
    }
); // schmema = tabela.

module.exports = mongoose.model("Box", Box);