import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import UserInput from '../components/UserInput'
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'

const Login: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <UserInput/>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Login
