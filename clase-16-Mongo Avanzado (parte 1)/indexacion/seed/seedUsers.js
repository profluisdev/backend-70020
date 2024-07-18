import fs from "fs";
import __dirname from "../dirname.js";
import { userModel } from "../user.model.js";
import mongoose from 'mongoose';


export const seedUsers = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin70020:123@coder70020.jcipszt.mongodb.net/clase-16");

    const users = await fs.promises.readFile(__dirname + "/seed/Users.json", "utf8" );
    const usersParse = await JSON.parse(users);

    await userModel.insertMany(usersParse);

    console.log("Usuarios registrados con éxito");
    
  } catch (error) {
    console.log(error);
  }
}

seedUsers();

