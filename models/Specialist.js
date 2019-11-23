const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const SpecSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    sex: {type: String, required: true},
    type: {type: String, required: true},
    experience: {type: Date, required: true},
    punctuality: {type: Number, required: true},
    communication: {type: Number, required: true},
    location: {type: String, required: true},
    availability: {type: Date, required: true},
    reviews: [
        {
            rating: {type: Number, required: true},
            comment: String
        }
    ]
});

module.exports = model("specialist", SpecSchema);