const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khaoula:dE93lMYYDzUCwrKG@cluster0.dvalzz8.mongodb.net/contactlist?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
