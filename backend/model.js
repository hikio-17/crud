const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema(
		{
			name: {
				type: String,
				required: true
			},
			price: {
				type: Number,
				required: true
			},
			stock: {
				type: Number,
				required: true
			},
			status: {
				type: Boolean,
				required: true
			}
		},
		{ collection: "Products"}
	);

module.exports = mongoose.model("ProductModel", productSchema);