const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfSchema = new Schema({
nom: String,
prenom: String,
email: String,
image:String,
type: {
    type:String,
    enum:['Architectes','Ingénieurs','Contrôleurs Techniques','Entreprises','Artisans','Matériaux','Institutions']
},
fix:String,
mob:String,
site:String,
pays:{
    type: String,
    default: "Tunisie"
},
region:{
    type: String,
},
cite:{
    type: String,
},
zip:{
    type: Number,
},
adress:{
    type: String
}

})

module.exports = Prof = mongoose.model('prof',ProfSchema)