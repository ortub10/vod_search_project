import React from "react";

function VodItem() {
  // It will be change with data from api
  return (
    <div className="col-md-3 border p-2">
      <img
        src="https://i.ebayimg.com/images/g/jaoAAOSw9RVfBfC4/s-l500.jpg"
        className="float-start me-2 w-50"
        alt="pic"
      />
      <h3>Rambo 5</h3>
      <div>Year: 2020</div>
      <button className="btn btn-dark">More info</button>
    </div>
  );
}

export default VodItem;
