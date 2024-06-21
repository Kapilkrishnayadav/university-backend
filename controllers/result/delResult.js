const Result=require("../../models/SemesterResult")

exports.deleteResult=(async(req,res)=>{
    try {
        const {_id }= req.body; // Get ID  mmm from URL parameter
        console.log(_id);
    
        const deletedResult = await Result.findByIdAndDelete({_id});
    
        if (!deletedResult) {
          return res.status(404).json('Result not found');
        }
    
        res.status(200).json('Result deleted successfully');
      } catch (error) {
        console.error('Error deleting result:', error);
        res.status(500).json('Internal server error');
      }
    });