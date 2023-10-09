const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Store name is required"],
        minLength: [3, "Store name must be at least three characters"]
    },

    sets: {
        type: Number,
        required: [true, "Sets is required"],
        min: [1, "Must be a number greater than 0"]
    },

    repetitions: {
        type: Number,
        required: [true, "Repetitions is required"],
        min: [1, "Must be a number greater than 0"]
    },

    weight: {
        type: Number,
        required: [true, "Weight is required"],
        min: [0, "Weight cannot be lower than 0"]
    },

    datePerformed: {
        type: String,
        required: [true, "Date is Required"]
    }

}, {timestamps: true})

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;