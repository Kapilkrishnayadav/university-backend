const mongoose=require("mongoose")
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String,required: true }
    
  });
  // name,DOb,fatherName,batch,class,rollno,branch,

// Create model from schema
const Admin = mongoose.model('Admin', AdminSchema);

// Export model
module.exports = Admin;