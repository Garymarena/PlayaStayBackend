import Condos from "../models/Condos";
import Rooms from "../models/Rooms";

export const createCondo = async (req, res, next) => {
  const newCondo = new Condos(req.body);

  try {
    const saveCondo = await newCondo.save();
    res.status(200).json(savedCondo);
  } catch (err) {
    next(err);
  }
};

export const updateCondo = async (req, res, next) => {
  try {
    const updateCondo = await Condos.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateCondo);
  } catch (err) {
    next(err);
  }
};

export const deleteCondo = async (req, res, next) => {
  try {
    await Condos.findOneAndDelete(req.params.id);
    res.status(200).json("Condo has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getCondo = async (req, res, next) => {
  try {
    const condo = await Condos.findById(req.params.id);
    res.status(200).json(condo);
  } catch (err) {
    next(err);
  }
};

export const getCondos = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const condos = await Condos.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(consdos);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Condos.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const condoCount = await Condos.countDocuments({ type: "condos" });
    const apartmentCount = await Condos.countDocuments({ type: "apartment" });
    const resortCount = await Condos.countDocuments({ type: "resort" });
    const villaCount = await Condos.countDocuments({ type: "villa" });
    const cabinCount = await Condos.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "condos", count: condoCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (err) {
    next(errr);
  }
};

// Seguir con export const getCondoRooms
