const asyncHandler = require('express-async-handler')
const Card = require('../models/cardModel')

/**
 * @desc Get all cards
 * @route GET /api/cards
 */
const getCards = asyncHandler(async (req, res) => {
	const cards = await Card.find({ column: req.params.id })
	res.status(200).json(cards)
})

/**
 * @desc Create new card
 * @route POST /api/cards
 */
const createCard = asyncHandler(async (req, res) => {
	if (!req.body.title) {
		res.status(400)
		throw new Error('Please add a title for the card')
	}

	const card = await Card.create({
		title: req.body.title,
		short_description: req.body.short_description,
		description: req.body.description,
		column: req.body.column,
	})

	res.status(200).json(card)
})

// @desc  Update card
// @route PUT /api/cards/cardId
const updateCard = asyncHandler(async (req, res) => {
	const card = await Card.findById(req.params.id)

	if (!card) {
		res.status(400)
		throw new Error('Card not found')
	}

	const updatedCard = await Card.findByIdAndUpdate(req.params.id, {
		column: req.body.columnId,
	})

	res.status(200).json(updatedCard)
})

module.exports = { getCards, createCard, updateCard }
