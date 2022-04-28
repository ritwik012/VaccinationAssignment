const PatientModel = require("../model/patient.model");

const registerPatient = async(req, res) => {
  const { name, DateOfBirth, Gender, PlaceOfBirth, BloodGroup, Height, Weight} = req.body;
  // const foundPatient = await PatientModel.findOne({name})
  // if(!foundPatient){
    try{
      const patient = new PatientModel({name, DateOfBirth, Gender, PlaceOfBirth, BloodGroup, Height, Weight})
      const registeredPatient = await patient.save()
      return res.render("welcome", {name : name, message : "You Have Been Successfully Registered !!", id : registeredPatient._id})
    }catch(err){
      return res.send({message : "Patient already exists. Enter New Data"})
    }
  // }else{
  //   return res.send({message : "Patient already exists. Enter New Data"})
  // }
}

const Home = (req, res) => {
  res.render("welcome")
}

const Form = (req, res) => {
  res.render("form")
}

module.exports = { registerPatient, Home, Form };