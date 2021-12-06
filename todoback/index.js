const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config();
require("./db/index");

const app = express();

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.use(cors);
app.use(express.json());
app.use(morgan("dev"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(PORT);
  console.log(`server is running on port ${PORT}`);

});

