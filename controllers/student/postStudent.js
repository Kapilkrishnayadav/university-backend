const Student=require("../../models/Student")

exports.postStudent=(async(req,res)=>{
    try {
        const newStudent = new Student(req.body); // Create a new Student object from request body
        const savedStudent = await newStudent.save(); // Save the new student to MongoDB
        res.json(savedStudent); // Send the saved student data back in the response
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating student' }); // Handle errors
      }
})