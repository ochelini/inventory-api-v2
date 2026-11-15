require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const productRoutes = require("../routes/productRoutes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.use("/products", productRoutes);

module.exports = app;
