//Package imports
import styled from "styled-components";
import React, { useEffect, useState } from "react";

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

const Button = styled.a`
  font-size: 1.25rem;
  background: transparent;
  color: #800000;
  border: none;
  font-weight: bold;
  padding: 1rem;
`;

const Search = styled.input`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  height: 2rem;
  input {
    border: none;
    :focus {
      border: none;
    }
  }
`;

//Logic for navigation bar
const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.localStorage.getItem("token") !== null) {
        setLoggedIn(true);
      }
    }
    
  });

  return (
    <StyledNavigation>
      <Section side="left">
        <Title>Testing</Title>
      </Section>
      <Section side="right">
        <Search />
        <Link href="/">
          <Button>Homepage</Button>
        </Link>
        <Link href="/explore">
          <Button>Explore</Button>
        </Link>
        <Link href="/profile">
          <Button>Your profile</Button>
        </Link>
        <Link href="/settings">
          <Button>Settings</Button>
        </Link>
        {!loggedIn && (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </Section>
    </StyledNavigation>
  );
};

export default Navigation;
