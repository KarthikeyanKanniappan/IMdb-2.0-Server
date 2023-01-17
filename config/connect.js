const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDb is Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
