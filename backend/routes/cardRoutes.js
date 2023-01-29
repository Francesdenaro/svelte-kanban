const express = require('express')
const router = express.Router()
const {
	getCards,
	createCard,
	updateCard,
} = require('../controllers/cardController')

router.route('/:id').get(getCards).post(createCard).put(updateCard)

module.exports = router
