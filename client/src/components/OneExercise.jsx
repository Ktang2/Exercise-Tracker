import React, {useState, useEffect} from 'react';
import { useNavigate ,useParams, Link } from 'react-router-dom';
import axios from 'axios';

const OneExercise = (props) => {
    const { id } = useParams();
    const [oneExercise, setOneExercise] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneExercise/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneExercise(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteExercise/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <div className='border border-dark p-3'>
            <h3>Exercise: {oneExercise.name}</h3>
            <p>Sets: {oneExercise.sets}</p>
            <p>Repetitions: {oneExercise.repetitions}</p>
            <p>Weight: {oneExercise.weight}</p>
            <p>Date Performed: {oneExercise.datePerformed}</p>
            <div className='d-flex justify-content-between '>
                <u><Link to={`/editExercise/${oneExercise._id}`}>Edit Exercise Details</Link></u>
                <u><Link onClick={(e) => {deleteHandler(oneExercise._id)}}>Delete</Link></u>
            </div>
        </div>
    )
}

export default OneExercise;