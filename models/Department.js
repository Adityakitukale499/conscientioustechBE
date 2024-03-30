const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
  name:{type:String,unique:true ,required:true},
  isDeleted:{type:Boolean, required:true},
  description: { type: String }
})

const Department = mongoose.model("Department", departmentSchema)
module.exports = Department