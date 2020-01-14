import React from "react";
import "./button.css";

const Button = props => {
  return (
    <div className="button_align">
      <button className="button_background">
        <span>{props.cancel}</span>
      </button>
    </div>
  );
};

export default Button;
