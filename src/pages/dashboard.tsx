import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import UserInput from '../components/UserInput'
import Container from '../components/Container'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Dashboard: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Dashboard</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Dashboard;
