const express = require('express')
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const Product = require('./Model')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/products',async(req,res)=>{
    const newProducts = new Product({
        src:req.body.src,
        name:req.body.name,
        price:req.body.price
    })

    try{
        await newProducts.save()
        res.status(200).json({message:"Product Added"})
    }catch(err){
        res.status(500).json(err)
    }
})

app.get('/api/products',async(req,res)=>{
    try{
        const Products = await Product.find()
        res.json(Products)
    }catch(err){
        res.status(500).json(err)
    }
})

app.get('/api/product/:_id',async(req,res)=>{
    const id = req.params._id;
    try{
        const product = await Product.find({_id:id})
        res.status(200).send(product)
    }catch(err){
        res.status(500).json(err)
    }
})

app.post('/api/products/cartitems',async(req,res)=>{
    try {
        const documents = await Product.find({
            _id: { $in: req.body.ids },
        }).select('-updatedAt -__v');
        res.status(200).json(documents);
    } catch (err) {
        res.status(500).json(err);
    }

})


mongoose.connect('mongodb://127.0.0.1:27017/pizza')
.then(()=>{console.log('Db connected')})
.catch((err)=>{err})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})