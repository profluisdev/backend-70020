import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    mongoose.connect("mongodb+srv://admin70020:123@coder70020.jcipszt.mongodb.net/ecommerce");
    console.log("Mongo DB conectado");
  } catch (error) {
    console.log(error);
  }
};
