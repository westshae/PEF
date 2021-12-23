import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { getSettings } from '../interactions/user_interactions'
import axios from 'axios'

interface SettingsInterface{
  city?:string,
  country?:string,
  balance?:number,
  profession?:string,
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
      </Content>
      <Footer/>
    </Container>
  )
}

export default Settings;
