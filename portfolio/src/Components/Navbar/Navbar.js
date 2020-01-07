import React from "react";
import "./Navbar.css";
import NavbarBox from './NavbarBox/NavbarBox';

const Navbar = (props) => props.name.map((user) => {
    return (
        <div className="Navbar">
            <NavbarBox username={user}/>
        </div>
    )
})


export default Navbar;