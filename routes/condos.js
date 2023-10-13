import express from "express";
import Condos from "../models/Condos.js";
import { createError } from "../utils/error.js";

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
  try {
    const updatedCondo = await Condos.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCondo);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Condos.findByIdAndDelete(req.params.id);
    res.status(200).json("Condo has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get
router.get("/:id", async (req, res) => {
  try {
    const Condo = await Condos.findById(req.params.id);
    res.status(200).json(Condo);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All
router.get("/", async (req, res, next) => {
  try {
    const Condos = await Condos.find();
    res.status(200).json(Condos);
  } catch (err) {
    next(err);
  }
});

export default router;
