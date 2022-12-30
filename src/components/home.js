import React from "react";
import Footer from "./footer";
import VodInput from "./vodInput";
import VodList from "./vodList";
import VodStript from "./vodStript";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <VodStript />
      <VodInput />
      <VodList />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
