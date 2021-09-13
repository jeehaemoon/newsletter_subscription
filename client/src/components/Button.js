import React from "react";
import styled from "styled-components";

const Button = ({ handleClick, type }) => {
  return (
    <ButtonDiv onClick={handleClick} className={type}>
      {type === "submit" ? "Subscribe" : "Reset"}
    </ButtonDiv>
  );
};

const ButtonDiv = styled.button`
  border-radius: 3px;
  min-width: fit-content;
  height: fit-content;
  margin-right: 20px;
  padding: 4%;
  font-size: large;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export default Button;
