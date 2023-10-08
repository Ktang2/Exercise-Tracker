import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditExercise = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    
    const [exercise, setExercise] = useState({
        name: "",
        sets: 0,
        repetitions: 0,
        weight: 0,
        datePerformed: ""
    })

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneExercise/${id}`)
            .then((res) => {
                console.log(res);
                setExercise(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const updateExercise = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateExercise/${id}`, exercise)
            .then(res => {
                console.log(res);
                navigate(`/`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    const changeHandler = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value})
    }


    return (
        <div className="d-flex flex-column align-items-center">
            <h5>Edit this Exercise!</h5>
            <form className="form-control w-25" onSubmit={updateExercise}>
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
                <button className="mt-3 mb-3 btn btn-primary">Update Exercise</button>
            </form>
        </div>
    )
}

export default EditExercise;