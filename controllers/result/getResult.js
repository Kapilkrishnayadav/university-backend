const Result = require("../../models/SemesterResult"); // Import the Student model

exports.getResult = async (req, res) => {
  try {
    const {studentId}=req.query;
    // console.log(studentId);
    // Find all students (optional filtering can be added using query parameters)
    // const results = await Result.find({studentId}).populate("studentId"); // Empty query object finds all
    const results = await Result.find({ studentId })
      .sort({ semester: 1 }) // Sort results in ascending order by semester
      .populate('studentId'); // Populate the "studentId" field
      
    res.json(results); // Send the array of student objects in the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching results' }); // Handle errors
  }
};
