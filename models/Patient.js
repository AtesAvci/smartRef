const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const PatientSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    age: {type: Number, required: true},
    sex: {type: String, required: true},
    location: {type: String, required: true},
});

module.exports = model("patient", PatientSchema);