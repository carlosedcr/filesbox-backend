const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: { //atributo title do tipo string.
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true
    }
    },
    {
        timestamps: true, //cria um campo criado e atualizado.
        toObject: { virtuals: true },
        toJSON: { virtuals:true }
    }
); // schmema = tabela.

File.virtual('url').get(function() {
    return `http://localhost:3333/files/${encodeURIComponent(this.path)}`
})  //existe somente no backend

module.exports = mongoose.model("File", File);