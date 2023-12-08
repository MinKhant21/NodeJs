import db from '../model'
const Product = db.products
const add = async(req,res) => {
     let {title , price} = req.body
     let products = await Product.create({title,price});
     res.status(200).send(products)
}
const getAll = async(req,res) => {
     let products = await Product.findAll({});
     res.status(200).send(products)
}

module.exports = {
     add,
     getAll
}