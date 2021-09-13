import React from "react";

const Button = ({ handleClick, type }) => {
  return (
    <button onClick={handleClick} className={type}>
      {type === "submit" ? "Subscribe" : "Reset"}
    </button>
  );
};

export default Button;
