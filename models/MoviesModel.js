const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  movieName: { type: String, required: true },
  yearOfRelease: { type: String, required: true },
  plot: { type: String, required: true },
  poster: { type: String, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "Actors" }],
  producer: { type: Schema.Types.ObjectId, ref: "Producer" },
});

module.exports = mongoose.model("Movies", MoviesSchema);
