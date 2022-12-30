import React, { useEffect } from "react";
import Footer from "./footer";
import VodInput from "./vodInput";
import VodList from "./vodList";
import VodStript from "./vodStript";
import "./home.css";

function Home() {
  useEffect(() => {
    doApi("batman");
  }, []);

  const doApi = async (_search) => {
    let myUrl = `https://www.omdbapi.com/?s=${_search}&apikey=2e25c92a`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    console.log(data);
  };
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
