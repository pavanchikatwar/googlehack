const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/marketplace', async (req, res) => {
    const products = await Product.find();
    res.render('marketplace', { products });
});

router.get('/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('product-listing', { product });
});

module.exports = router;
