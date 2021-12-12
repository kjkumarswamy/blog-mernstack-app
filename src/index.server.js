require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");
const categoryRoutes = require("./routes/category");

const PORT = process.env.PORT;

connectDb();
app.use(express.json());
app.use(cors());

app.use("/public", express.static(__dirname + "/uploads"));
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Hi this si working");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
