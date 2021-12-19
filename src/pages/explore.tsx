import type { NextPage } from 'next'

//Component imports
import Navigation from "../components/Navigation"
import {Container, Content} from '../components/Containers'
import Footer from '../components/Footer'
import ExploreCards from '../components/explore/ExploreCards'

const Explore: NextPage = () => {
  return (
    <Container>
      <Navigation/>
      <Content>
        <ExploreCards/>
      </Content>
      <Footer/>
    </Container>
  )
}

export default Explore;
