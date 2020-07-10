const express = require("express");

const router = express.Router();


const { check, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const config = require("config");

const auth = require("../../middleware/auth");

const Prof = require("../../models/Prof");

// @route   POST api/prof
// @desc    Add prof
// @access  Private

router.post('/',auth,async(req,res)=>{
    try {
        const{_id,nom,prenom,email,image,type,fix,mob,site}=req.body;
        let prof=await Prof.findById(_id);
        if(prof){
            prof.nom=nom;
            prof.prenom=prenom;
            prof.email=email;
            prof.image=image;
            prof.type=type;
            prof.fix=fix;
            prof.mob=mob;
            prof.site=site;
            prof=await prof.save();
        }else{
            prof= new Prof({
                nom,prenom,email,image,type,fix,mob,site
            })
            prof=await prof.save();
        }
        res.json(prof);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

// @route   GET api/prof
// @desc    Get profs
// @access  Public

router.get('/',async(req,res)=>{
    try {
        const profs = await Prof.find();
        res.json(profs)
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}) 

// @route   DELETE api/prof/;id
// @desc    DELETE prof
// @access  Private

router.delete('/:id',auth,async(req,res)=>{
    try {
        const prof = await Prof.findById(req.params.id);
        if(!prof) return res.status(404).json({msg:'Prof not Found'})
        await prof.remove();
        res.json({msg:'Prof removed'});
        
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:'Prof not Found'})
        }
        res.status(500).send("Server error");
    }
}) 
module.exports = router;