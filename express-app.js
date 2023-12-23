const express = require('express');
const cors = require('cors');
const { car } = require('./api');

module.exports = async (app) => {
    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limite: '1mb' }));
    app.use(cors());

    // api    
    car(app);
}