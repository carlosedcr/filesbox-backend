const multer = require('multer');
const path = require('path');//padroniza a escrita dos caminhos.
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'), //jogas os arquivos na pasta tmp.
    storage: multer.diskStorage({ //armazena no disco.
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            }) //gera um nome unico para o arquivo.
        }
    })
};