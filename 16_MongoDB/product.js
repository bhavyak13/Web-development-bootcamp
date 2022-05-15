const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Lesss go!!");
    })
    .catch((e) => {
        console.log("ERROR", e)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['S,"XL', 'L', 'M']
    }
})

productSchema.methods.greet = function () {
    console.log("heyyy budyyyyy!!");
    console.log("Light weight budyyyyy!!");
    console.log(this.price);
}

// Static method!!
//basically the methods which live on model itself not on the intances of the model! 
productSchema.statics.fireSale = function () {
    //here this refers to the entire model!!
    return this.updateMany({}, { onSale: true, price: 0 });
}




//this is our model!
//nd db->collection will be named as products
const Product = mongoose.model('Product', productSchema);



//instance method!!
const findProduct = async function () {
    // here this refers to a particular instance of model!
    const obj = await Product.findOne({ name: 'bk car' });
    obj.greet();
}
// findProduct();





//calling our static method function FireSale
Product.fireSale()
    .then((res) => {
        console.log(res);
    })

// const bike = new Product({
//     name: "bk bruuuu",
//     price: 1000
// });
// bike.save()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("OOPPPPSSSSSS", e);
//     })


//as we have set price to be min. of 0 in our schema so running below statment will throw error
// Product.findOneAndUpdate({ name: "bk car" }, { price: -4 }, { runValidators: true ,new:true})
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e=>{
//         console.log(e);
//     })
