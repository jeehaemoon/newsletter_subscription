import React from "react";
import styled from "styled-components";

const Input = ({ name, type, placeholder, handleChange, value, checked }) => {
  return (
    <InputEntry
      type={type}
      name={name}
      placeholder={placeholder}
      className={name}
      value={value}
      checked={checked}
      onChange={(ev) => handleChange(ev.target.value, name)}
      required
    />
  );
};

const InputEntry = styled.input`
  background-color: #e7e7e7;
  margin-top: 30px;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`;

export default Input;
