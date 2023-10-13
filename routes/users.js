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
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get
router.get("/:id", async (req, res) => {
  try {
    const User = await Users.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Get All
router.get("/", async (req, res) => {
  try {
    const Users = await Users.find();
    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
