import React from "react";
import "./RightBox.css";
import loremIpsum from "./image/lorem-ipsum.jpg";

const RightBox = (props) => {
    return (
        <div className="RightBox">
            <img src={loremIpsum} alt="lorem-ipsum" style={{ height: "70%", width: "70%"}}></img>
        </div>
    )
}

export default RightBox;