const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/micro', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'micro-dashboard.html'));
});

router.get('/large', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'large-dashboard.html'));
});

router.get('/investor', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'investor-dashboard.html'));
});

router.post('/product', async (req, res) => {
    const { name, description, price, category, stock } = req.body;
    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            owner: req.user._id
        });
        await product.save();
        res.redirect('/dashboard/micro');
    } catch (err) {
        res.status(500).send('Error adding product');
    }
});

module.exports = router;
