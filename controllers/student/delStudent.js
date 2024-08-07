const Student=require("../../models/Student")

exports.deleteStudent=(async(req,res)=>{
    try {
        // Extract the list of IDs to delete from the request body
        const { ids } = req.body;
    //    console.log(ids);
        // Delete multiple entries based on their IDs
        const result = await Student.deleteMany({ _id: { $in: ids } });
    
        // Check if any entries were deleted
        if (result.deletedCount > 0) {
          res.status(200).json({ message: 'Entries deleted successfully' });
        } else {
          res.status(404).json({ message: 'No entries found for the given IDs' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting entries' });
      }
    });