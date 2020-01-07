import React from 'react';
import './NavbarBox.css';

const NavbarBox = (props) => (
    <div className="nav-4">
        <br />
        {"id [#" + props.username.id + "]"} {"Name: " + props.username.name}
        <br />
        {"Age: " + props.username.age}
    </div>
)

export default NavbarBox;