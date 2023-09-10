import React from "react";

function RadioInput({ label, value, checked, setter, clickHandler }) {
  return (
    <label>
      <input
        type="radio"
        checked={checked === value}
        onChange={() => setter(value)}
        onClick={clickHandler}
        className="ml-2"
      />
      <span className="pl-1">{label}</span>
    </label>
  );
}

export default RadioInput;
