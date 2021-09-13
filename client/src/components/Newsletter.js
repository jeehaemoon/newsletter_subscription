import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const initialState = { name: "", company: "", email: "", validate: false };

const Newsletter = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  //function that changes the require values for the selected item
  //when typing in the input field
  const handleChange = (val, item) => {
    setFormData({ ...formData, [item]: val });

    //if the checkbox is clicked, change the value to the opposite
    if (item === "validate") {
      setFormData({ ...formData, [item]: !formData.validate });
    }
  };

  const validateName = () => {
    return formData.name !== "";
  };

  const validateCompany = () => {
    return formData.company !== "";
  };

  const validateEmail = () => {
    const emailParts = formData.email.split("@");
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].length > 0 &&
      emailParts[1].includes(".")
    );
  };

  const validateCheckbox = () => {
    return formData.validate === true;
  };

  //submit function
  const handleSubmit = () => {
    if (!validateName()) {
      setError("Enter a name");
    } else if (!validateCompany()) {
      setError("Enter a company");
    } else if (!validateCheckbox()) {
      setError("You must accept to receive the newsletter");
    } else if (!validateEmail()) {
      setError("Enter a valid email");
    } else history.push("/confirmation");
  };

  //function that resets all inputs
  const handleReset = (ev) => {
    ev.preventDefault();
    setFormData(initialState);
    setError("");
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormInfo>
        <Title>Subscribe to our newsletter!</Title>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          handleChange={handleChange}
          value={formData.name}
        />
        <Input
          name="company"
          type="text"
          placeholder="Company"
          handleChange={handleChange}
          value={formData.company}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          handleChange={handleChange}
          value={formData.email}
        />
        <div>
          <Input
            name="validate"
            type="checkbox"
            handleChange={handleChange}
            checked={formData.validate}
          />
          <Label htmlFor="validate">
            I would like to subscribe to the newsletter.
          </Label>
        </div>
        <ButtonsDiv>
          <Button handleClick={handleSubmit} type="submit" />
          <Button handleClick={handleReset} type="reset" />
        </ButtonsDiv>
        {error !== null ? <ErrorMessage>{error}</ErrorMessage> : null}
      </FormInfo>
      <Img alt="building" src="/assets/building.jpg" />
    </Form>
  );
};

const Form = styled.form`
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
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 1);
  border: none;

  @media (max-width: 1024px) {
    min-height: 40%;
  }
  @media (max-width: 767px) {
    height: fit-content;
  }
`;

const FormInfo = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  .name,
  .email,
  .company {
    height: 10%;
    padding: 2%;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const Label = styled.label`
  margin-left: 5px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 5px;
  width: 80%;
  height: 15%;
  font-weight: bold;

  .submit {
    background-color: #fac832;
    font-size: large;
    color: white;
    width: 50%;
    min-width: fit-content;
    height: fit-content;
    border: none;
    border-radius: 3px;
    margin-right: 20px;
    padding: 4%;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    :hover {
      background-color: #d3aa30;
    }
  }

  .reset {
    background-color: white;
    min-width: fit-content;
    font-size: large;
    color: gray;
    width: 30%;
    height: fit-content;
    padding: 4%;
    border: 1px solid gray;
    border-radius: 3px;
    margin-right: 20px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    :hover {
      background-color: #e7e7e7;
    }
  }
`;

const Img = styled.img`
  height: 100%;
  max-width: 40%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

export default Newsletter;
