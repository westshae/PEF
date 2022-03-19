//Package imports
import styled from "styled-components";

//Overall container for all components on the page, wraps around navbar and content
const Container = styled.div`
    display:flex;
    flex-direction:column;
    overflow:visible;
    height: 100vh;
`

const Overall = styled.div`
    display:grid;
    grid-template-columns:1fr 3fr;
    background-color:#212121;
    width: 100vw;

`

const Content = styled.div`
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow-x:hidden;
    overflow-y:scroll;
`



export {Container, Content, Overall};