import React from "react";
import {Link} from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <Link className="App-link" to="/">Homepage</Link>
            <Link className="App-link" to="/create-exercise">Create an Exercise</Link>
        </nav>
    );
}

export default Navigation;