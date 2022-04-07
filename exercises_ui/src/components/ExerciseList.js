import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, deleteExercise, editExercise }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    deleteExercise={deleteExercise}
                    editExercise={editExercise}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
