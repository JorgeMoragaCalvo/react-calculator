import React from "react";
import '../stylesheets/clearbutton.css'

const ClearButton = (props) => (
    <div className="clear-button">
        {props.children}
    </div>
);

export default ClearButton;