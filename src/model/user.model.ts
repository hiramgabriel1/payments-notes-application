import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    maxLength: 40,
  },

  lastName: {
    type: String,
    require: true,
    maxLength: 40,
  },

  city: {
    type: String,
    require: true,
    maxLenght: 20,
  },

  mountPrestamo: {
    type: Number,
    require: true,
  },

  totalInteres: {
    type: Number,
  },

  totalSumadoInteres: {
    type: Number,
  },

  mount: {
    type: Number,
  },
});

export const userModel = mongoose.model("users", user);
// Javascript -> tipado dinamico
// example const username = "jafete"

// TypeScript -> tipado fuerte
// example -> const username: string = "jafete"
