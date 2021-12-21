import type { NextPage } from "next";

//Component imports
import Navigation from "../components/Navigation";
import { Container, Content } from "../components/Containers";
import Footer from "../components/Footer";
import { useState } from "react";
import styled from "styled-components";
import { login } from "../interactions/user_interactions";
import Router from "next/router";

const OverallStyle = styled.div`
  justify-content: center;
`;

const Form = styled.form`
  justify-content: center;
  width: fit-content;
  margin: auto;
  display:grid;
  gap:0.5rem;
`;

const Label = styled.label`
  color: #800000;
  font-size: 1.25rem;
  text-align:left;
`;

const Input = styled.input`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  height: 2rem;
  input {
    border: none;
    :focus {
      border: none;
    }
  }
`;

const Button = styled.button`
font-size: 1.25rem;
background: transparent;
color: #800000;
border: none;
font-weight: bold;
text-align:center;
display: block;
margin: 0 auto;
`;

const UserInput = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code == "") {
      login(email, undefined);
    } else {
      login(email, code).then(() => {
        Router.push("/profile");
      });
    }
  };

  return (
    <OverallStyle>
      <Form onSubmit={submitForm}>
        <Label htmlFor={"email"}>Email</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          id={"email"}
        />
        <Label htmlFor={"code"}>Code</Label>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="Enter your code if recieved"
          id={"code"}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </OverallStyle>
  );
};

const Login: NextPage = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <UserInput />
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
