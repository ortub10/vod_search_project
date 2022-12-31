import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function VodInput() {
  const inputRef = useRef();
  const nav = useNavigate();

  const onSearchClick = () => {
    let inputVal = inputRef.current.value;
    nav(`/?s=${inputVal}`);
  };

  return (
    <header className="container-fluid bg-dark p-2">
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 className="text-white">My vod</h2>
          </div>
          <nav className="d-flex col-md-4">
            <input
              ref={inputRef}
              type="search"
              className="form-control"
              placeholder="search..."
            />
            <button onClick={onSearchClick} className="btn btn-warning">
              Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default VodInput;
