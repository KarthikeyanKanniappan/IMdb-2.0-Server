const Actors = require("../models/ActorModel.js");

const addActor = async (req, res) => {
  try {
    const { name, gender, biography, dateOfBirth, movies, picture } = req.body;
    const actor = await Actors.create({
      name,
      gender,
      biography,
      dateOfBirth,
      movies,
      picture,
    });

    res.status(200).json({message:"Success"});
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

const getActors = async (req, res) => {
  try {
    const totalActors = await Actors.find();
    res.status(200).json(totalActors);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

module.exports = { addActor, getActors };
