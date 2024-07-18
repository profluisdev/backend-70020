import mongoose from "mongoose";
import { courseModel } from "./course.model.js";
import { studentModel } from "./student.model.js";

const environment = async () => {
  await mongoose.connect("mongodb+srv://admin70020:123@coder70020.jcipszt.mongodb.net/clase-16");

  // Creamos un curso
  // await courseModel.create({
  //     title: "Curso de Backend",
  //     description: "Este es un curso para devs productivos que no copian y pegan",
  //     difficulty: 5,
  //     topics: ["Javascript", "Node", "Express"],
  //     professor: "Luis"
  //   });

  // Creamos un estudiante y le incorporamos el curso creado

  //    await studentModel.create({
  //     first_name: "Pepe",
  //     last_name: "Sapo",
  //     email: "sp@gmail.com",
  //     gender: "Sapo",
  //     courses:[{course: "66992930eab0bfa87b04c6cc"}]
  //   })

  // Consultar el estudiante creado

  const student = await studentModel.find({_id: "669929e4f626be74c076479c"});
  console.log(JSON.stringify(student, null, "\t"));

// Consultar el estudiante con populate
  // const student = await studentModel.findById("669929e4f626be74c076479c").populate("courses.course");
  // console.log(JSON.stringify(student, null, "\t"));

  mongoose.disconnect();
  console.log("Mongo desconectado");
};

environment();
