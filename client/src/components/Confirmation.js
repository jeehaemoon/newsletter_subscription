import React from "react";
import styled from "styled-components";

const Confirmation = () => {
  return (
    <Container>
      <Logo alt="logo" src="/assets/logo.jpeg" />
      <h1>Thank you for your subscription!</h1>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  min-width: fit-content;
  height: 60%;
  min-height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 1);
  border: none;
  padding: 5%;
  text-align: center;
`;

const Logo = styled.img`
  width: 20%;
`;

export default Confirmation;
