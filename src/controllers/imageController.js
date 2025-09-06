const knex = require('./../database');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');


module.exports={
    async createImg(req, res) {
        try {
            const { name } = req.body;
            // Suporte para upload de imagem como base64 ou buffer
            let imageData;
            if (req.file && req.file.buffer) {
                imageData = req.file.buffer;
            } else if (req.body.image) {
                // Se vier como base64
                imageData = Buffer.from(req.body.image, 'base64');
            } else {
                return res.status(400).json({ error: 'Imagem não fornecida' });
            }

            await knex('images').insert({ name, image: imageData });
            return res.status(201).json({ name });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
    async searchImagensAll(req, res) {
        try {
            const result = await knex('images');
            // Converte o campo image (Buffer) para base64
            const imagens = result.map(img => ({
                ...img,
                image: img.image ? img.image.toString('base64') : null
            }));
            return res.status(200).json(imagens);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },
}