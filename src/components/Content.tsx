//Package imports
import styled from "styled-components";

//Wraps all content on the page, excluding navbar
const Content = styled.div`
    margin-bottom:3%;
    background-clip:margin-box;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`

export default Content;