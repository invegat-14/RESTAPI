const express = require('express');
const router = express.Router();
const books = require('../services/books');

/* GET book by ISBN */
router.get('/', async function(req, res, next) {
    try {
        const { ISBN } = req.query
        console.log(`ISBN = ${ISBN}`)
        res.json(await books.getBook(ISBN));
    } catch (err) {
        console.error(`Error while getting Book by ISBN `, err.message);
        next(err);
    }
});

module.exports = router;