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

//Delete

//Get

//Get All

export default router;
