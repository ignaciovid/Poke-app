import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <nav className="nav navbar-dark bg-dark">
      <div className="containerNav">
        <Link to="/">All Pokemons</Link>
        <a href="#">About</a>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search Pokemon..."
            aria-label="Username"
            aria-describedby="input-group-button"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-primary"
            id="input-group-button-left"
          />
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
