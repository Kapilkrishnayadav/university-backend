const mongoose=require("mongoose")

const Schema = mongoose.Schema;
const ResultSchema = new Schema({
    studentId: { type: String, required: true,ref:"Student" },
    semester: { type: String, required: true },
    percentage: { type: String },
    totalMarksInWord: { type: String },
    finalResult:{type: String},
    result: [{
      subjectCode: { type: String, required: true },
      subject: { type: String, required: true }, // Subject name
      totalMarks: { type: String, required: true },
      obtainedMarks: { type: String, required: true },   // Marks obtained
      marksInWord: { type: String, required: true },
    }],
  });
  // name,DOb,fatherName,batch,class,rollno,branch,

// Create model from schema
const Result = mongoose.model('Result', ResultSchema);

// Export model
module.exports = Result;

  