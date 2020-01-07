import React from "react";
import "./Body.css";

import RightBox from "./Body-Components/RightBox/RightBox";
import LeftBox from "./Body-Components/LeftBox/LeftBox";

const Body = (props) => {
    return (
        <div className="Body">
            <LeftBox />
            <RightBox />
        </div>
    )
}

export default Body;