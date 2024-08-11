const Result = require("../models/SemesterResult"); // Import the Student model
const Student=require("../models/Student")
exports.getStudentResult = async (req, res) => {
    const { dob, rollNo, semester } = req.query;
    try {
      console.log("heee")
        // Find student using name, dob, and rollNo
        const student = await Student.findOne({ dob, rollNo,semester });
    
        if (!student) {
          return res.status(404).json({ message: 'Student not found' });
        }
        // console.log(student);
        // Find result for the given student and semester
        if(student.resultAccess==false)
        {
          console.log("hello")
          return res.status(404).json({ message: 'Access denied' });
        }
        const result = await Result.findOne({ studentId: student._id, semester });
    
        if (!result) {
          return res.status(404).json({ message: 'Result not found for this semester' });
        }
    
        // Return student data and relevant semester result
        const filteredResult = {
          name: student.name,
          dob: student.dob,
          rollNo: student.rollNo,
          semester: result.semester,
          percentage: result.percentage,
          fatherName: student.fatherName,
          batch: student.batch,
          class: student.class_,
          branch: student.branch,
          totalMarksInWord: result.totalMarksInWord,
          finalResult: result.finalResult,
          result: result.result,
        };
    
        res.json(filteredResult);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
};
