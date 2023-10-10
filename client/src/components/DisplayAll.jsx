import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const DisplayAllExercises = (props) => {

    const[exercises, setExercises]= useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/allExercises')
            .then((allExercises) => {
                setExercises(allExercises.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [exercises])

    return (
        <div>
            <u><h5 className="mb-3">Welcome to Exercise Tracker!</h5></u>
            <table className="table border table-striped">
                <thead>
                    <tr>
                        <th>Exercise</th>
                        <th>Sets</th>
                        <th>Repetitions</th>
                        <th>Weight</th>
                        <th>Last Performed On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exercises.map((exercise) => (
                            <tr key={exercise._id}>
                                <td><Link to={'/oneExercise/' + exercise._id}>{exercise.name}</Link></td>
                                <td>{exercise.sets}</td>
                                <td>{exercise.repetitions}</td>
                                <td>{exercise.weight} lbs / {(exercise.weight*2.2).toFixed(2)} kgs</td>
                                <td>{exercise.datePerformed}</td>
                                <td><Link to={'/editExercise/' + exercise._id}>Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to={'/addExercise'}><button className="btn btn-primary">Add Exercise</button></Link>
        </div>
    )
}

export default DisplayAllExercises;