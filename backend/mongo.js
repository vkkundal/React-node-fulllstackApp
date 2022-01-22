const mongoose = require("mongoose");
mongoose.Promiss =global.Promiss;
require("dotenv").config();

mongoose.connect(process.env.MONGOURI)