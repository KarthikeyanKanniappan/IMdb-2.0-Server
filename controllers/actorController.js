const Actors = require("../models/ActorModel.js");

const addActor = async (req, res) => {
  try {
    const { name, gender, biography, dateOfBirth, movies } = req.body;
    const actor = await Actors.create({
      name,
      gender,
      biography,
      dateOfBirth,
      movies,
    });

    res.status(200).json(actor);
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
