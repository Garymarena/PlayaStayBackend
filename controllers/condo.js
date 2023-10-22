export const createCondo = async (req, res, next) => {
  const newCondo = new Condos(req.body);

  try {
    const saveCondo = await newCondo.save();
    res.status(200).json(savedCondo);
  } catch (err) {
    next(err);
  }
};
