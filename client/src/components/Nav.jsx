import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';


const Nav = (props) => {


    return (
        <div className="d-flex justify-content-between align-items-center mb-5 px-4 py-2 border">
            <h2>Exercise Tracker</h2>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    )
}

export default Nav;