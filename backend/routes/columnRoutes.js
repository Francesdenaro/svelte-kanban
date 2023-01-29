const express = require('express')
const router = express.Router()
const { getColumns, createColumn } = require('../controllers/columnController')

router.route('/').get(getColumns).post(createColumn)

module.exports = router
