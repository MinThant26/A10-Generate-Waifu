const express = require('express');
const router = express.Router();

const getImage = require('../models/get-image');

router.get('/', async (req,res) => {
    try {
        const image = await getImage();
    
        res.send({image: image});
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({message: 'Error fetching data'});
    }
});

module.exports = router;