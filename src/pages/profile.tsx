import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile: NextPage = () => {
  let email: string;
  let token: string;
  try {
    email = window.localStorage.getItem("email")!;
    token = window.localStorage.getItem("token")!;
  } catch (e) {
    console.error(e);
  }

  const [backgroundLink, setBackgroundLink] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/profile/pfp", {
      params:{
        email:email,
        token:token,
        photoname:"example1"
      }
    })
    .then((res)=>{
      setBackgroundLink(res.data);
    })
  }, [])
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Profile</h1>
        <img src={backgroundLink}/>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Profile;
