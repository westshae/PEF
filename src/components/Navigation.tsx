//Package imports
import styled from "styled-components";
import React from "react";

import { StyledLink } from "./Button";

//Style for navigation bar background
const StyledNavigation = styled.nav`
    background-color: transparent;
    display:grid;
    grid-template-columns:1fr 1fr;
`

interface SectionProps {
    side:string;
  }
  
  const Section = styled.div<SectionProps>`
    display:flex;
    justify-content:${props => props.side};
    align-items:center;
    gap: 2rem;
    height: 100%;
  `

const Title = styled.h1`
    font-size:1.5rem;
    background:transparent;
    color:#800000 ;
    border:none;
    font-weight:bold;
`

//Logic for navigation bar
const Navigation = () => {
    return (
        <StyledNavigation>
                <Section side="left">
                    <Title>Testing</Title>
                    
                </Section>
                <Section side="right">
                    <StyledLink href="/" text="Landing"/>
                    <StyledLink href="/dashboard" text="Dashboard"/>
                    <StyledLink href="/login" text="Login"/>
                </Section>
        </StyledNavigation>
    )
    
}

export default Navigation;