import express from "express";
import Users from "../models/User.js";

const router = express.Router();

//Create
router.post("/", async (req, res) => {
  const newUser = new Users(req.body);

  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update

//Delete

//Get

//Get All

export default router;
