const express = require('express')
const router = express.Router()
const { getCards, createCard } = require('../controllers/cardController')

router.route('/:id').get(getCards).post(createCard)

module.exports = router
