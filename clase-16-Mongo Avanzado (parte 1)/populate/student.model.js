import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name: {
      type: String
    },
    last_name:  {
      type: String
    },
    email:  {
      type: String
    },
    gender:  {
      type: String
    },
    courses: {
      type: [ { course: { type: mongoose.Schema.Types.ObjectId, ref: "courses" } } ] // {course: "66991bcf8b9a459ca97d4d91"}
    }
});

// Middleware de mongoose
// Este middleware nos permite hacer operaciones previo a mostrar el resultado
studentSchema.pre("find", function () {
  // La palabra this haces referencia a este documento, es por eso que la apalabra populate aparece y funciona
  this.populate("courses.course");
});

export const studentModel = mongoose.model(studentCollection, studentSchema);