import React, { useEffect, useState } from "react";
import Footer from "./footer";
import VodInput from "./vodInput";
import VodList from "./vodList";
import VodStript from "./vodStript";
import "./home.css";

function Home() {
  const [ar, setAr] = useState([]);
  useEffect(() => {
    doApi("batman");
  }, []);

  const doApi = async (_search) => {
    let myUrl = `https://www.omdbapi.com/?s=${_search}&apikey=2e25c92a`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    setAr(data.Search);
  };
  return (
    <React.Fragment>
      <VodStript />
      <VodInput />
      <VodList vod_ar={ar} />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
