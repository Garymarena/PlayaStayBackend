import express from "express";
import Rooms from "../models/Rooms.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newRoom = new Rooms(req.body);

  try {
    const saveRoom = await newRoom.save();
    res.status(200).json(saveRoom);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete

//Get

//Get All

export default router;
