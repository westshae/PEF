import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
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
      <div>

<Label>{label}</Label>
        <Checkbox type="checkbox" defaultChecked={currentValue}/>
      </div>
  )
}

const inputSetting = (label:string, currentValue:string) =>{
  return(
    <div>

<Label>{label}</Label>
        <InputField/>
    </div>
  )
}

const Settings: NextPage = () => {
  let email:string;
  let token:string;
  try{
    email = window.localStorage.getItem("email")!;
    token = window.localStorage.getItem("token")!;
  }catch(e){
    console.error(e);
  }

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
        <Form>

        {toggleSetting("ree", true)}
        {inputSetting("woo", "default")}
          <Button type="submit">Submit</Button>
        </Form>

      </Content>
      <Footer/>
    </Container>
  )
}

export default Settings;
