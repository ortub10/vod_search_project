import React from "react";
import { Link } from "react-router-dom";

function VodItem(props) {
  let item = props.item;
  return (
    <div className="col-md-4 p-2">
      <div className="border p-2 h-100 overflow-hidden shadow">
        <img src={item.Poster} className="float-start me-2 w-25" alt="pic" />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>

        <button className="btn">
          <Link className="btn btn-dark" to={`/info/${item.imdbID}`}>
            More info
          </Link>
        </button>
      </div>
    </div>
  );
}

export default VodItem;
