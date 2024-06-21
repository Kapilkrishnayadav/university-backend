const Result=require("../../models/SemesterResult")

exports.postResult=(async(req,res)=>{
    try {
        const newResult = new Result(req.body); // Create a new Result object from request body
        const savedResult = await newResult.save(); // Save the new Result to MongoDB
        res.json(savedResult); // Send the saved Result data back in the response
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating Result' }); // Handle errors
      }
})