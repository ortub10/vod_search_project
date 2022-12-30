import React from "react";
import VodItem from "./vodItem";

function VodList(props) {
  return (
    <div className="container-fluid p-5">
      <div className="container">
        <h2>List of tv show: </h2>
        <div className="row">
          {props.vod_ar.map((item) => {
            return <VodItem key={item.imdbID} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default VodList;
