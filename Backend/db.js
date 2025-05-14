const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "mongodb+srv://sumedhmhaske310503:SumedhM3153@cluster0.p0wrbtv.mongodb.net/todos",
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
