const Movies = require("../models/MoviesModel.js");
const Actors = require("../models/ActorModel.js");
const Producer = require("../models/ProducerModel.js");

const addMovie = async (req, res) => {
  try {
    const {
      movieName,
      yearOfRelease,
      plot,
      poster,
      actors,
      producer,
      allActors,
      allProducer,
    } = req.body;
    const totalActors = await Actors.find();
    const totalProducer = await Producer.find();
    const actorsTotal = [];
    const producerTotal = [];
    // adding actors details
    for (let i = 0; i < actors.length; i++) {
      for (let j = 0; j < totalActors.length; j++) {
        let reqActor = actors[i].name;
        let dbActor = totalActors[j].name;
        if (reqActor.toLowerCase() == dbActor.toLowerCase()) {
          actorsTotal.push(totalActors[j]);
        }
      }
    }

    // adding producer details
    for (let j = 0; j < totalProducer.length; j++) {
      let reqProducer = producer.name;
      let dbProducer = totalProducer[j].name;

      if (
        reqProducer.split(" ").join("").toLowerCase() ==
        dbProducer.split(" ").join("").toLowerCase()
      ) {
        producerTotal.push(totalProducer[j]);
      }
    }

    const movies = await Movies.create({
      movieName,
      yearOfRelease,
      plot,
      poster,
      allActors: actorsTotal,
      allProducer: producerTotal[0],
      actors,
      producer,
    });

    res.status(200).json({message:"success"})
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

 const getMovieByUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "User doesn't exist " });
    }
    const userMovie = await Movies.find({ _id:id });
    res.status(200).json(userMovie);
  } catch (err) {
    res.status(404).json({ message: "something went wrong" });
  }
};


const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { movieName, yearOfRelease, plot, poster, actors, producer } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No Movie exist with id ${id} ` });
    }
    const updatedMovie = {
      movieName,
      yearOfRelease,
      plot,
      poster,
      actors,
      producer,
    };
    await Movies.findByIdAndUpdate(id, updatedMovie, { new: true });
    res.json({ updatedMovie });
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No movie exist with id ${id} ` });
    }
    await Movies.findByIdAndRemove(id);
    res.json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: "something went wrong" });
  }
};

const getMovie = async (req, res) => {
  try {
    const totalMovie = await Movies.find()
      .populate("allActors")
      .populate("allProducer");
    res.status(200).json(totalMovie);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

module.exports = { addMovie, updateMovie, deleteMovie, getMovie ,getMovieByUser };
