import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { getSettings } from '../interactions/user_interactions'
import axios from 'axios'
import styled from 'styled-components'

interface SettingsInterface{
  city?:string,
  country?:string,
  balance?:number,
  profession?:string,
}

const Form = styled.form`

`

const Label = styled.label`

`

const Button = styled.button`

`

const Checkbox = styled.input`

`

const InputField = styled.input`

`

const toggleSetting = (label:string, currentValue:boolean) =>{
  return(
      <Form>
        <Label>{label}</Label>
        <Checkbox type="checkbox" checked={currentValue}/>
        <Button type="submit">Submit</Button>
      </Form>
  )
}

const inputSetting = (label:string, currentValue:string) =>{
  return(
      <Form>
        <Label>{label}</Label>
        <InputField/>
        <Button type="submit">Submit</Button>
      </Form>
  )
}

const Settings: NextPage = () => {
  const email = window.localStorage.getItem("email");
  const token = window.localStorage.getItem("token");

  const [settings, setSettings] = useState<SettingsInterface>({});

  useEffect(()=>{
    if(email !== undefined && token !== undefined){
      axios.get("http://localhost:5000/auth/settings", {
      params:{
        email:email,
        token:token
      }
    }).then((res)=>{
      setSettings(res.data);
    })
    }
  }, [])

  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Settings</h1>
        <h1>{settings.profession}</h1>
        {toggleSetting("ree", false)}
        {inputSetting("woo", "default")}

      </Content>
      <Footer/>
    </Container>
  )
}

export default Settings;
