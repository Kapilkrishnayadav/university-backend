const Result = require("../../models/SemesterResult"); // Assuming Student model in ../../models

exports.putResult = async (req, res) => {
  try {
    const  _id  = req.body._id; // Extract student ID from URL path
    const updates = req.body; // Capture update data from request body
    console.log(_id);
    // Validate student ID (optional)
    // if (!mongoose.Types.ObjectId.isValid(studentId)) {
    //   return res.status(400).json({ error: "Invalid student ID" });
    // }

    // Update student document using findByIdAndUpdate
    const updatedResult = await Result.findByIdAndUpdate(_id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Validate updated data
    });

    if (!updatedResult) {
      return res.status(404).json({ error: "Not found" });
    }

    res.status(200).json(updatedResult); // Send the updated student data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating Result" });
  }
};
