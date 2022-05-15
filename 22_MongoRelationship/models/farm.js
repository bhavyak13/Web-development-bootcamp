const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => {
        console.log("DB CONNECTED!");
    })
    .catch(e => {
        console.log("MONGO CONNECTION ERROR!");
        console.log(e);
    })


const ProductSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['summer', 'spring', 'winter']
    }
});
const farmSchema = Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})


const Product = mongoose.model('Product', ProductSchema);
const Farm = new mongoose.model('farm', farmSchema);


const fn = async () => {
    // const product1 = new Product({
    //     name: 'melon',
    //     price: 34,
    //     season: 'spring'
    // })
    // const product1 = new Product({
    //     name: 'Apple',
    //     price: 12,
    //     season: 'summer'
    // })
    const product1 = new Product({
        name: 'banana',
        price: 6,
        season: 'winter'
    })
    await product1.save()
        .then(d => { console.log(d); })
        .catch(e => { console.log(e); })
}
// fn();

const fn2 = async () => {
    const farm1 = new Farm({
        name: "Green Farms",
        city: "New Delhi",
    })
    const p1 = await Product.findOne({ name: 'banana' });
    farm1.products.push(p1);
    await farm1.save().then(d => { console.log(d) }).catch(e => { console.log(e); })
}
// fn2();

const fn3 = async() => {
    // const f = await Farm.findOne({});
    const f = await Farm.findOne({}).populate('products');
    console.log(f);
}
fn3();