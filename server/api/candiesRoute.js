const router = require('express').Router()
const Candies = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  try {
    const allCandies = await Candies.findAll();
    res.json(allCandies);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
