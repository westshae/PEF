import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import UserInput from '../components/UserInput'
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'

const Profile: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Profile</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Profile;
