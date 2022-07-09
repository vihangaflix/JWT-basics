require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const Router = require("./routes/login");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", Router);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listing on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
