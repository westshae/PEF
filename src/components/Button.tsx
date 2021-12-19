import styled from "styled-components"
import Link from "next/link"

const ButtonStyle = `
  background:transparent;
  border:none;
  justify-content:center;
  align-items:center;
  text-align:center;
  font-size:1.25rem;
  padding:1rem;
  color:#800000;
`

const StyledButton = styled.button`${ButtonStyle}`;
const LinkStyle = styled.a`${ButtonStyle}`;

const StyledLink = ({href, text}:{href:string, text:string}) => (
  <Link href={href} passHref>
    <LinkStyle>{text}</LinkStyle>
  </Link>
)

export {StyledButton, StyledLink}