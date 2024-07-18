
import mongoose from "mongoose";
import { userModel } from "./user.model.js";

const environment = async () => {
    await mongoose.connect("mongodb+srv://admin70020:123@coder70020.jcipszt.mongodb.net/clase-16");

    const response = await userModel.find({first_name: "Hiram"}).explain("executionStats");
    console.log(response);

    mongoose.disconnect();
    console.log("Mongo desconectado");
}

environment();