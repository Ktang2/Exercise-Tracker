const ExerciseController = require("../controllers/exercise.controller")

module.exports = (app) => {
    app.get('/api/allExercises', ExerciseController.getAllExercises)
    app.get('/api/oneExercise/:id', ExerciseController.getOneExercise)
    app.post('/api/newExercise', ExerciseController.createExercise)
    app.put('/api/updateExercise/:id', ExerciseController.updateExercise)
    app.delete('/api/deleteExercise/:id', ExerciseController.deleteExercise)
    
}