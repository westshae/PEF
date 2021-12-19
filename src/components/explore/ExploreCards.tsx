import styled from "styled-components";


const CardContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:1rem;
`

const CardStyle = styled.div`
  background-color:#dfdfcc;
  color:#800000;
  padding:1rem;
  border:transparent;
  border-radius:0.75rem;
`

const CardTitle = styled.h1`
`

const CardText = styled.p`

`

const CardImage = styled.img`

`

const Card = ()=>{
  return(
    <CardStyle>
      <CardTitle>Title</CardTitle>
      <CardText>Text</CardText>
      <CardText>Text</CardText>

      <CardText>Text</CardText>

      <CardText>Text</CardText>

    </CardStyle>
  )
}

const ExploreCards = () =>{
  return(
    <CardContainer>
      <Card/>
      <Card/>

      <Card/>

      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </CardContainer>
  )
}

export default ExploreCards;