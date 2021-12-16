//Package imports
import styled from "styled-components";
import React from "react";

import { StyledLink } from "./Button";

//Style for navigation bar background
const StyledNavigation = styled.nav`
    background-color: transparent;
    display:grid;
    grid-template-columns:1fr;
`

const Section = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:2%;
    height:100%;
`

const Title = styled.h1`
    font-size:1.5rem;
    background:transparent;
    color:#505050 ;
    border:none;
    font-weight:bold;
`

//Logic for navigation bar
const Navigation = () => {
    return (
        <StyledNavigation>
                <Section>
                    <Title>Testing</Title>
                    <StyledLink href="/" text="Landing"/>
                    <StyledLink href="/dashboard" text="Dashboard"/>
                    <StyledLink href="/login" text="Login"/>
                </Section>
        </StyledNavigation>
    )
    
}

export default Navigation;