
const { connect } = require("mongoose");

const uri = "mongodb+srv://rutwikgulhane:9UlbubH158fwpaDD@cluster0.heufx.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)