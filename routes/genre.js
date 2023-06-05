const express = require('express');
const router = express.Router();
const service = require('../services/genre');

/* GET */
router.get('/', async function(req, res, next) {
  try {
    res.json(await service.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting genres `, err.message);
    next(err);
  }
});

module.exports = router;