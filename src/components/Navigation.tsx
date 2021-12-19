//Package imports
import styled from "styled-components";
import React from "react";

import { StyledLink } from "./Button";
import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface SectionProps {
  side: string;
}

const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;

const Title = styled.button`
  font-size: 1.5rem;
  background: transparent;
  color: #800000;
  border: none;
  font-weight: bold;
`;

const Image = styled.img`
  height: 3rem;
  width: 3rem;
  margin:0.25rem;
  :hover{
    opacity:50%;
  }
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//Logic for navigation bar
const Navigation = () => {
  return (
    <StyledNavigation>
      <Section side="left">
        <Title>Testing</Title>
      </Section>
      <Section side="right">
        <Image src="/assets/UI/magnifying-glass.png" />
        <Link href="/">
          <Image src="/assets/UI/news.png"/>
        </Link>
        <Link href="/explore">
          <Image src="/assets/UI/marketplace.png"/>
        </Link>
        <Link href="/profile">
          <Image src="/assets/UI/smile.png" />
        </Link>
        <Link href="/settings">
          <Image src="/assets/UI/setting.png" />
        </Link>
      </Section>
    </StyledNavigation>
  );
};

export default Navigation;
