//Package imports
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: transparent;
  display: flex;
  width:100%;
  flex-direction:column;
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
        <Search />
        <Link href="/">
          <Button>Homepage</Button>
        </Link>
    </StyledNavigation>
  );
};

export default Navigation;
