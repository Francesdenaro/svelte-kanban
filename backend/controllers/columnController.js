const asyncHandler = require('express-async-handler')
const Column = require('../models/columnModel')

/**
 * @desc Get all columns
 * @route GET /api/columns
 */
const getColumns = asyncHandler(async (req, res) => {
	const columns = await Column.find()
	res.status(200).json(columns)
})

/**
 * @desc Create new column
 * @route POST /api/columns
 */
const createColumn = asyncHandler(async (req, res) => {
	if (!req.body.name) {
		res.status(400)
		throw new Error('Please add a name for the column')
	}

	const column = await Column.create({ name: req.body.name })

	res.status(200).json(column)
})

module.exports = { getColumns, createColumn }
