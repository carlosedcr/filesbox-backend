const Box = require("../models/Box");

class BoxController {
    async store(req, res) { //metodo.
        //const box = await Box.create({ title: 'carlosteste' });
        const box = await Box.create({ title: req.body.title })
        return res.json(box);
    }

    async show(req, res){
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: {sort: { createdAt: -1}}
        });

        return res.json(box);
    }
}

module.exports = new BoxController(); //retornar a classe e os metodos.