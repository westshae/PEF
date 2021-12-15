//Package imports
import styled from "styled-components";
import React from "react";
import Link from "next/link"

//Style for navigation buttons
const Button = styled.button`
    background:transparent;
    color: #322759 ;
    border:none;
    font-size:1.25em;
    font-family:Helvetica;
    :hover{
        text-decoration:underline 2px;
    }
`
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

const Title = styled.button`
    font-size:1.5rem;
    background:transparent;
    color:#322759 ;
    border:none;
    font-weight:bold;
    padding-top:3%;
    padding-bottom:3%;
    :hover{
        text-decoration:underline 2px;
    }
`

//Opens new tab without security issues
const openInNewTab = (url:string) =>{
    window.open(url, "_blank", "noopener");
}

//Logic for navigation bar
const Navigation = () => {
    return (
        <StyledNavigation>
                <Section>
                    <Link href="/"><Button>Landing</Button></Link>
                    <Link href="/dashboard"><Button>Dashboard</Button></Link>
                </Section>
        </StyledNavigation>
    )
    
}

export default Navigation;