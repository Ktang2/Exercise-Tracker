const Exercise = require("../models/exercise.model");

module.exports = {

    getAllExercises: (req, res) => {
        Exercise.find({})
            .then((allExercises) => {
                res.status(200).json(allExercises)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    getOneExercise: (req, res) => {
        const id = req.params.id;
        Exercise.findById(id)
            .then((oneExercise) => {
                res.status(200).json(oneExercise)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    createExercise: (req, res) => {
        Exercise.create(req.body)
            .then((newExercise) => {
                res.status(201).json(newExercise)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    updateExercise: (req, res) => {
        const id = req.params.id
        Exercise.findOneAndUpdate(
            {_id: id},
            req.body,
            {new:true, runValidators:true})

            .then((updatedExercise) => {
                res.status(201).json(updatedExercise)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    deleteExercise: (req, res) => {
        const id = req.params.id
        Exercise.deleteOne({_id: id})
        
            .then((result) => {
                res.status(204).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }

}