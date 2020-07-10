const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProduitSchema = Schema({
    nom:String,
    descp:String,
    mainImage:String,
    cat:[String],
    prix:Number,
    stock:Number,
})

module.exports = Produit = mongoose.model('produit',ProduitSchema)