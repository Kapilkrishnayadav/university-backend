const express = require('express');
const router = express.Router();
const loginAdmin=require("../controllers/loginAdmin")
const postStudent=require("../controllers/student/postStudent")
const getStudent=require("../controllers/student/getStudent")
const deleteStudent=require("../controllers/student/delStudent")
const putStudent=require("../controllers/student/putStudent")

const postResult=require("../controllers/result/postResult")
const getResult=require("../controllers/result/getResult")
const deletedResult=require("../controllers/result/delResult")
const putResult=require("../controllers/result/putResult")

const getStudentResult=require("../controllers/getStudentResult")

router.post("/login-admin",loginAdmin.loginAdmin);
router.post("/student",postStudent.postStudent);
router.get("/student",getStudent.getStudent);
router.delete("/student",deleteStudent.deleteStudent);
router.put("/student",putStudent.putStudent);

router.post("/result",postResult.postResult);
router.get("/result",getResult.getResult);
router.delete("/result",deletedResult.deleteResult);
router.put("/result",putResult.putResult);

router.get("/student-result",getStudentResult.getStudentResult);
module.exports = router;