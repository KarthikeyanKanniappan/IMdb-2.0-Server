const Producer = require("../models/ProducerModel.js");

const addProducer = async (req, res) => {
  try {
    const { name, gender, biography, dateOfBirth, movies, picture } = req.body;
    const producer = await Producer.create({
      name,
      gender,
      biography,
      dateOfBirth,
      movies,
      picture,
    });
    res.status(200).json(producer);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

const getProducer = async (req, res) => {
  try {
    const totalProducer = await Producer.find();
    res.status(200).json(totalProducer);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

module.exports = { addProducer, getProducer };
