import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import UserInput from '../components/UserInput'
import Container from '../components/Container'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home: NextPage = () => {
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

export default Home
