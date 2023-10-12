import express from "express";
import Condos from "../models/Condos.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newCondo = new Condos(req.body);

  try {
    const saveCondo = await newCondo.save();
    res.status(200).json(savedCondo);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Update
router.put("/:id", async (req, res) => {
  const updateCondo = Condos(req.body);
  try {
    const updateCondo = await Condo.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateCondo);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete

//Get

//Get All

export default router;
