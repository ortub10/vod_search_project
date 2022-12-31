import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VodList from "./vodList";
import VodStript from "./vodStript";
import "./home.css";

function Home() {
  const [ar, setAr] = useState([]);
  const [query] = useSearchParams();
  useEffect(() => {
    let searchQ = query.get("s") || "superman";
    doApi(searchQ);
  }, [query]);

  const doApi = async (_search) => {
    let myUrl = `https://www.omdbapi.com/?s=${_search}&apikey=2e25c92a`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    setAr(data.Search);
  };
  return (
    <React.Fragment>
      <VodStript />
      <VodList vod_ar={ar} />
    </React.Fragment>
  );
}

export default Home;
