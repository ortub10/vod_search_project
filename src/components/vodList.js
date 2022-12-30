import React from "react";
import VodItem from "./vodItem";

function VodList() {
  return (
    <div className="container-fluid p-5">
      <div className="container">
        <h2>List of tv show: </h2>
        <div className="row">
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
          <VodItem />
        </div>
      </div>
    </div>
  );
}

export default VodList;
