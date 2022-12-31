import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function VodInfo() {
  const prams = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    doApi();
  });

  const doApi = async () => {
    let myUrl = `https://www.omdbapi.com/?i=${prams.id}&apikey=2e25c92a`;
    let resp = await fetch(myUrl);
    let data = await resp.json();
    setItem(data);
  };

  return (
    <div className="container p-2 text-center">
      <img src={item.Poster} alt="movie" className="col-md-2" />
      <h2>{item.Title}</h2>
      <div>Runtime: {item.Runtime} </div>
      <div>Rating: {item.imdbRating}</div>
      <div>Genre: {item.Genre}</div>
      <div className="col-md-5 mx-auto">Plot: {item.Plot} </div>
      <button
        className="btn btn-dark mt-3"
        onClick={() => {
          nav(-1);
        }}
      >
        Back to list
      </button>
    </div>
  );
}

export default VodInfo;
