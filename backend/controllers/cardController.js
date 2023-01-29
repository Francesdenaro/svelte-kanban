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

module.exports = { getCards, createCard }
