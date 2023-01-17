const Movies = require("../models/MoviesModel.js");
const Actors = require("../models/ActorModel.js");
const Producer = require("../models/ProducerModel.js");

const addMovie = async (req, res) => {
  try {
    const { movieName, yearOfRelease, plot, poster, actors, producer } =
      req.body;
    // const totalActors = await Actors.find();
    // const totalProducer = await Producer.find();
    // const actorId = totalActors.filter((el) => {
    //   if (actors.toLowerCase() == el.name.toLowerCase()) {
    //     return el._id;
    //   }
    // });

    // if(!actorId[0]){

    // }
    const movies = await Movies.create({
      movieName,
      yearOfRelease,
      plot,
      poster,
      actors,
      producer,
    });

    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
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
    const totalMovie = await Movies.find();
    res.status(200).json(totalMovie);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong ${err}` });
  }
};

module.exports = { addMovie, updateMovie, deleteMovie, getMovie };
