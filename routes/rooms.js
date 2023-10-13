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
//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedRoom = await Rooms.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get
router.get("/:id", async (req, res) => {
  try {
    const Room = await Rooms.findById(req.params.id);
    res.status(200).json(Room);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All
router.get("/", async (req, res) => {
  try {
    const Rooms = await Rooms.find();
    res.status(200).json(Rooms);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
