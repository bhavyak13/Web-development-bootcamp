const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm'
    }]
})

//our model!
const Product = new mongoose.model('Product', productSchema);

module.exports = Product;

// const obj1 = new Proudct({
//     name: 'guava',
//     category: 'fruit',
//     price: '8'
// })
// obj1.save();