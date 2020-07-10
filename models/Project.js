const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  titre: {
    type: String
  },
  descp: {
    type: String
  },
  mainImage: {
    type: String
  },
  images: [
    {
      type: String
    }
  ],
  datef: {
    type: Date,
    default: Date.now
  },
  region: {
    type: String
  },
  nom: String,
  image: String,
  email: String,
  prof: String
});
module.exports = Project = mongoose.model("project", ProjectSchema);
