const mongoose = require('mongoose')

const columnSchema = new mongoose.Schema({
	name: { type: String, required: true },
	children: [mongoose.SchemaTypes.ObjectId],
})

module.exports = mongoose.model('Column', columnSchema)
