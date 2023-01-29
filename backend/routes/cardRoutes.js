const express = require('express')
const router = express.Router()
const {
	getCards,
	createCard,
	updateCard,
} = require('../controllers/cardController')

router.route('/:id').get(getCards).put(updateCard)
router.route('/').post(createCard)
module.exports = router
