//const mongoose = require("mongose");
const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  task: { type: Boolean, required: true },
  isDel: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  timeStamp: { type: Date, default: new Date() },
});

//const todoModel = mongoose.module("Todo", todoSchema);

module.exports =mongoose.model("Todo", todoSchema)

//module.exports = todoModel;
