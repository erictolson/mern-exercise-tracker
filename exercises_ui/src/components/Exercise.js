import React from 'react';
import { GiChewedSkull, GiBloodySword } from 'react-icons/gi'

function Exercise({ exercise, deleteExercise, editExercise }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><GiBloodySword  onClick={() => editExercise(exercise)}/></td>
            <td><GiChewedSkull onClick={() => deleteExercise(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;