const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))



app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})







const categories = ['vegetable', 'fruit', 'dairy'];

//mongodb!
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStandDemo')
    .then(() => {
        console.log('MONGODB CONNECTED!!');
    }).catch(e => {
        console.log("ERRORRR in connecting MONGODB!!")
        console.log(e);
    })

const Product = require('./models/product');
const Farm = require('./models/farm');
const { application } = require('express');



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
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const obj = await Product.findById(id).populate('farm', 'name');
    // console.log(obj);
    res.render('products/show', { obj });
})
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const obj = await Product.findById(id);
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















//FARM ROUTES!!

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms })
})

app.get('/farms/new', async (req, res) => {
    // const { id } = req.params;  
    // const farm = await Farm.findById(id);
    res.render('farms/new');
})
app.get('/farms/:id', async (req, res) => {
    const { id } = req.params;
    const obj = await Farm.findById(id).populate('products', 'name');
    res.render('farms/show', { obj });
})
app.post('/farms', async (req, res) => {
    const f1 = new Farm(req.body);
    await f1.save();
    res.redirect('/farms');
})
app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
})
app.post('/farms/:id', async (req, res) => {
    const p1 = new Product(req.body);
    const { id } = req.params;
    const f1 = await Farm.findById(id);
    p1.farm.push(f1);
    f1.products.push(p1);
    await f1.save();
    await p1.save();
    res.redirect(`/farms/${id}`);
})
app.delete('/farms/:id', async (req, res) => {
    const { id } = req.params;
    await Farm.findByIdAndDelete(id);
    res.redirect('/farms');
})


app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
})