import type { NextPage } from "next";

//Component imports
import Navigation from "../components/Navigation";
import { Container, Content, Overall } from "../components/Containers";
import Footer from "../components/Footer";
import React from "react";
import Feed from "../components/feed/Feed";
import NewPost from "../components/feed/newPost";

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
          <NewPost/>
          <Feed/>
        </Content>
        <Footer />
      </Container>
    </Overall>
  );
};

export default Home;
