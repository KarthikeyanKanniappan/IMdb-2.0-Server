const express = require("express");
const connectDB = require("./config/connect.js");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/movie", require("./routes/movie.js"));
app.use("/actor", require("./routes/actor.js"));
app.use("/producer", require("./routes/producer.js"));

app.listen(process.env.PORT, () => {
  console.log(`server listen in ${process.env.PORT}`);
});
