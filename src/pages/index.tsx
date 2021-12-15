import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import Container from '../components/Container'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  let email;
  let token;
  if(typeof window !== "undefined"){
    email = window.localStorage.getItem("email");
    token = window.localStorage.getItem("token");
  }
  // let user = useContext(userContext);
  return (
    <Container>
      <Navigation/>
      <Content>
        <h1>Test</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Home
