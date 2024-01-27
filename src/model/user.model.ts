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

  capitalPrestado: {
    type: String,
    require: true,
  },

  total: {
    type: Number,
    require: true,
  },

  fechaPrestamo: {
    type: Number,
  },

  fechaPago: {
    type: Number,
  },

  paymentMethod: {
    type: String,
  },
});

export const userModel = mongoose.model("users", user);
// Javascript -> tipado dinamico
// example const username = "jafete"

// TypeScript -> tipado fuerte
// example -> const username: string = "jafete"
