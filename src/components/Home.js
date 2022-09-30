import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Avaleht</h1>
        <br />
        <ul>
            <li>
            <Link to="/thesis">Login(thesis)</Link>
            </li>
            <li>
            <Link to="/resources">Add resources</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
        </ul>
        </div>
    );
};

export default Home;
