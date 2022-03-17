import type { NextPage } from "next";

//Component imports
import Navigation from "../components/Navigation";
import { Container, Content, Overall } from "../components/Containers";
import Footer from "../components/Footer";
import React from "react";
import ExploreCards from "../components/explore/Feed";

const Home: NextPage = () => {
  let email;
  let token;
  if (typeof window !== "undefined") {
    email = window.localStorage.getItem("email");
    token = window.localStorage.getItem("token");
  }
  return (
    <Overall>
      <Navigation />

      <Container>
        <Content>
          <ExploreCards/>
        </Content>
        <Footer />
      </Container>
    </Overall>
  );
};

export default Home;
