const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const path = require('path');
const AppError = require('./AppError');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['vegetable', 'fruit', 'dairy'];

//mongodb!
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand2')
    .then(() => {
        console.log('MONGODB CONNECTED!!');
    }).catch(e => {
        console.log("ERRORRR in connecting MONGODB!!")
        console.log(e);
    })

const Product = require('./models/product');



app.get('/', (req, res) => {
    res.send("OKay all gud");
})

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index', { products, category });
    }
    else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'all' });
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})
app.post('/products', async (req, res) => {
    const { name, price, category } = req.body;
    const newProduct = new Product({ name: name, price: price, category: category });
    await newProduct.save();
    res.redirect('/products');
})
app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const obj = await Product.findById(id);
    if (!obj) {
        return next(new AppError("Such Product doesnt exist", 404));
    }
    res.render('products/show', { obj });
})
app.get('/products/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    const obj = await Product.findById(id);
    if (!obj) {
        return next(new AppError("Such Product doesnt exist", 404));
    }
    res.render('products/edit', { obj, categories });
})
app.patch('/products/:id', async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    Product.findOneAndUpdate({ _id: id }, { name: name, price: price, category: category })
        .then(d => {
            console.log(d);
        })
        .catch(e => {
            console.log(e);
        })

    res.redirect('/products');
})
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


app.use((err, req, res, next) => {
    const { status, message } = err;
    res.status(status).send(message);
})


app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
})