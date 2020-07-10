const express = require("express");
const router = express.Router();

const Project = require("../../models/Project");

// @route   POST api/project
// @desc    Add project
// @access  Private
router.post("/", async (req, res) => {
  const { titre,
    mainImage,
    images,
    descp,
    datef,
    region,
    adress,
    nom,
    image,
    email,
    prof } = req.body;
  try {
    const project = new Project({
      titre,
      mainImage,
      images,
      descp,
      datef,
      region,
      adress,
      nom,
      image,
      email,
      prof
    });
    project.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GEt api/project
// @desc    GEt all projects
// @access  Public
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;