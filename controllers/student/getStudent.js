const Student = require("../../models/Student"); // Import the Student model

exports.getStudent = async (req, res) => {
  try {
    // Find all students (optional filtering can be added using query parameters)
    const students = await Student.find({}); // Empty query object finds all
    res.json(students); // Send the array of student objects in the response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching students' }); // Handle errors
  }
};
