import React from "react";

const Button = (props) => {
    // console.log(props);
    return (
        <div>
            <button className="regular-button">{props.title}</button>
        </div>
    );
};

export default Button;
