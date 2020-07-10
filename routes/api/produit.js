const express = require("express");

const router = express.Router();


const { check, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const config = require("config");

const auth = require("../../middleware/auth");

const Produit = require("../../models/Produit");


// @route   POST api/produit
// @desc    Add produit
// @access  Private
router.post('/',async(req,res)=>{
    try {
        
        const{_id,nom,descp,mainImage,cat,prix,stock}=req.body;
        let produit=await Produit.findById(_id);
        if(produit){
            produit.nom=nom;
            produit.descp=descp;
            produit.mainImage=mainImage;
            produit.cat=cat;
            produit.prix=prix;
            produit.stock=stock;
            produit=await Produit.save();
        }else{
            produit= new Produit({
                nom,descp,mainImage,cat,prix,stock
            })
            produit=await produit.save();
        }
        res.json(produit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// @route   GET api/produit
// @desc    get produits
// @access  Public
router.get('/',async(req,res)=>{
    try {
        const produits = await Produit.find();
        res.json(produits)
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// @route   GET api/produit/:id
// @desc    get produit by id
// @access  Public
router.get('/:id',async(req,res)=>{

});

// @route   GET api/produit/:cat
// @desc    get produits by category
// @access  Public
router.get('/:cat',async(req,res)=>{

});

module.exports = router;