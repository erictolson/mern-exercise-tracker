import React from 'react';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
	const history = useHistory();

    const deleteExercise = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            setExercises(exercises.filter(m=> m._id !== _id));
        } else {
            console.error(`Failed to delete movie with id = ${_id}, status code = ${response.status}`)
        }
    };

    const editExercise = async movie => {
        setExerciseToEdit(movie);
        history.push("/edit-exercise");
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    };
	
    useEffect(() => {
        loadExercises();
    }, []);
	
    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} deleteExercise={deleteExercise} editExercise={editExercise}></ExerciseList>
        </>
    );
}

export default HomePage;