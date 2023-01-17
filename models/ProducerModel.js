const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProducerSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  biography: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  movies: [{ type: String, ref: "Movies" }],
});

module.exports = mongoose.model("Producer", ProducerSchema);
