import React, {useState} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const AddExercise = (props) => {

    const [exercise, setExercise] = useState({
        name: "",
        sets: 0,
        repetitions: 0,
        weight: 0,
        datePerformed: ""
    })
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const changeHandler = (e) => {
            setExercise({...exercise, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newExercise', exercise)
            .then((res) => {
                console.log(res)
                navigate(`/`)
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h5>Add an Exercise!</h5>
            <form className="form-control w-25" onSubmit={submitHandler}>
                <div>
                    <label>Name: </label>
                    {
                        errors.name ?
                        <p className='text-danger'>{errors.name.message} </p> :
                        null
                    }
                    <input className="form-control mb-3" type="text" name="name" value={exercise.name} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Sets: </label>
                    {
                        errors.sets ?
                        <p className='text-danger'>{errors.sets.message} </p> :
                        null
                    }
                    <input className="form-control mb-3" type="number" name="sets" value={exercise.sets} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Repetitions: </label>
                    {
                        errors.repetitions ?
                        <p className='text-danger'>{errors.repetitions.message} </p> :
                        null
                    }
                    <input className="form-control mb-3" type="number" name="repetitions" value={exercise.repetitions} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Weight: </label>
                    {
                        errors.weight ?
                        <p className='text-danger'>{errors.weight.message} </p> :
                        null
                    }
                    <input className="form-control mb-3" type="number" name="weight" value={exercise.weight} onChange={changeHandler}/>
                </div>
                <div>
                    <label>Date Performed: </label>
                    {
                        errors.datePerformed ?
                        <p className='text-danger'>{errors.datePerformed.message} </p> :
                        null
                    }
                    <input className="form-control mb-3" type="date" name="datePerformed" value={exercise.datePerformed} onChange={changeHandler}/>
                </div>
                <button className="mt-3 mb-3s btn btn-primary">Add Exercise</button>
            </form>
        </div>
    )
}

export default AddExercise;