require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bookRouter = require("./Routes/bookRoutes");
const userRoute = require("./Routes/userRoutes");
app.use(express.json());
app.use(cors());
//connect mongodb

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Mongo DB connected"))
  .catch((error) => console.log(error));

app.use("/api", bookRouter);
app.use("/api/user", userRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
