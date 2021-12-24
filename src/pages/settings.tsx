import type { NextPage } from "next";

//Component imports
import Navigation from "../components/Navigation";
import { Container, Content } from "../components/Containers";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

interface SettingsInterface {
  city?: string;
  country?: string;
  balance?: number;
  profession?: string;
}

const Form = styled.form``;

const Label = styled.label``;

const Button = styled.button``;

const Checkbox = styled.input``;

const InputField = styled.input``;

const toggleSetting = (label: string, currentValue: boolean) => {
  return (
    <div>
      <Label>{label}</Label>
      <Checkbox type="checkbox" defaultChecked={currentValue} />
    </div>
  );
};

const inputSetting = (label: string, currentValue: string) => {
  return (
    <div>
      <Label>{label}</Label>
      <InputField placeholder={currentValue}/>
    </div>
  );
};

const FormContainer = (settings:SettingsInterface) =>{
  let values = [];
  console.log(settings);
  for(const [key, value] of Object.entries(settings)){
    if(typeof value === "boolean"){
      values.push(toggleSetting(key, value));
    }else{
      values.push(inputSetting(key, value));
    }
  }
  return(
    <Form>
      {values}
      <Button type="submit">Submit</Button>

    </Form>
  )
}

const Settings: NextPage = () => {
  let email: string;
  let token: string;
  try {
    email = window.localStorage.getItem("email")!;
    token = window.localStorage.getItem("token")!;
  } catch (e) {
    console.error(e);
  }

  const [settings, setSettings] = useState<SettingsInterface>({});

  useEffect(() => {
    if (email !== undefined && token !== undefined) {
      axios
        .get("http://localhost:5000/auth/settings", {
          params: {
            email: email,
            token: token,
          },
        })
        .then((res) => {
          setSettings(res.data);
        });
    }
  }, []);

  return (
    <Container>
      <Navigation />
      <Content>
        <h1>Settings</h1>
        {FormContainer(settings)}
      </Content>
      <Footer />
    </Container>
  );
};

export default Settings;
