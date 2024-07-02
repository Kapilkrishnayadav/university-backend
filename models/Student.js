const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String, required: true },
    dob: { type: String, required: true },
    fatherName: { type: String, required: true },
    batch: { type: String, required: true },
    class_: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
   
  });
// Create model from schema
const Student = mongoose.model('Student', StudentSchema);
module.exports =Student;