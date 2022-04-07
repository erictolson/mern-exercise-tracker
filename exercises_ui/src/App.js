import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState} from 'react';
import Navigation from './components/nav.js';
import {GiRaiseZombie} from "react-icons/gi";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Spoooky Exercise Tracker App</h1>
          <p>Track your exercise history and scare yourself with progress.</p>
          <GiRaiseZombie className='App-logo'/>
        </header>
        <Navigation/>
        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create-exercise">
            <CreateExercisePage />
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit} />
          </Route>
          </main>
          <footer>
          <p>Created by Eric Tolson. &copy; 2022.</p>
          <a href="https://www.flaticon.com/free-icons/spooky" title="spooky icons">Spooky icons created by smalllikeart - Flaticon</a>
        </footer>
      </Router>
    </div>
  );
}

export default App;