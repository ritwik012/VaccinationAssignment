const express = require("express");
const { registerPatient, Home, Form } = require("../controller/patient.controller");

const PatientRouter = express.Router()

PatientRouter.post("/createpatient", registerPatient)
PatientRouter.get("/createpatient", Form)
PatientRouter.get("/welcome", Home)

module.exports = PatientRouter;