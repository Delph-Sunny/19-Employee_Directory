import React from "react";
import { BsSearch } from "react-icons/bs";
import "./style.css";

// Searching using props.search
function Search(props) {
  return (
    <form>
      <div className="inner-form mb-2">
        <div className="input-field">
          <div className="search-icon">
            <BsSearch />
          </div>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control text-truncate"
            placeholder="Enter here to find a name"
            id="search"
          />
        </div>
      </div>
    </form>
  );
}

export default Search;
