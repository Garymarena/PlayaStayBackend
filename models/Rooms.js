import mongoose from "mongoose";
const { Schema } = mongoose;

const RoomsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amenities: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Rooms", RoomsSchema);
