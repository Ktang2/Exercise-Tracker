const express = require("express");
const cors = require("cors");
const app = express();
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:5173'}));

const ExerciseRoutes = require("./routes/exercise.routes");
ExerciseRoutes(app);

app.listen(8000, () => console.log("The server running on port 8000"));
