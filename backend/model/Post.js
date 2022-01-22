const mongoose = require("mongoose");
const post_schema =mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      contact: {
        type: String,
        required: true
      }
})

module.exeports= mongoose.model("Post",post_schema)
