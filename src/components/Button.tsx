import styled from "styled-components"
import Link from "next/link"

const ButtonStyle = `
  justify-content:center;
  width:100%;
  background:red;
  border:none;
`

const StyledButton = styled.button`${ButtonStyle}`;
const LinkStyle = styled.a`${ButtonStyle}`;

const StyledLink = ({href, text}:{href:string, text:string}) => (
  <Link href={href} passHref>
    <LinkStyle>{text}</LinkStyle>
  </Link>
)

export {StyledButton, StyledLink}