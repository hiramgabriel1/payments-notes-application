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
    type: String,
  },

  fechaPago: {
    type: String,
  },

  paymentMethod: {
    type: String,
  },

  direccion: {
    type: String
  },

  pagado: {
    type: Boolean,
  },

  cancelado: {
    type: Boolean,
  },

  daysPayment: {
    type: String,
  },

  moneyToPayment: {
    type: Number,
  },


});

export const userModel = mongoose.model("users", user);
