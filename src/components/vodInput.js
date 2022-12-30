import React from "react";

function VodInput() {
  return (
    <header className="container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 className="text-white">My vod</h2>
          </div>
          <nav className="d-flex col-md-4">
            <input
              type="search"
              className="form-control"
              placeholder="search..."
            />
            <button className="btn btn-warning">Search</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;
