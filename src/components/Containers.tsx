//Package imports
import styled from "styled-components";

//Overall container for all components on the page, wraps around navbar and content
const Container = styled.div`
    background-color:#EDEDE5;
    display:flex;
    flex-direction:column;
    overflow:visible;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`



export {Container, Content};