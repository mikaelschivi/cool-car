const mongoose = require('mongoose');
const Car = require('../db/models/car');

module.exports = (app) => {
    // get all
    app.get('/api/findAll', async (req, res) => {
        try{
            const result = await Car.find();
            res.status(200).json({
                "items-cars": result
            });
        } catch(err){
            res.status(500).send({ error: "error" });
            console.log(err);
        }
    });

    // create item
    app.post('/api/createItem', async (req, res) => {
        const item = new Car(req.body);
        try{
            await item.save();
            console.log({ status: 'item created',
                            info: req.body
                        });
            res.status(201).json({item});
        } catch(err){
            res.status(400).json(err);
            console.log(err);
        }
    });

    // delete item
    app.delete('/api/deleteItemById/:id', async (req, res) => {
        try{
            const result = await Car.findByIdAndDelete(req.params.id)
            if (!result){
                res.send(400).send({ error: 'item not found' });
            };
            console.log({ status: 'item deleted',
                          info: result
            });
            res.status(200).json({
                "deleted item": result
            });
        } catch(err){
            res.status(401).send("error");
            console.log(err);
        }
    });
}