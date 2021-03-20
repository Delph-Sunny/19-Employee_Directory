import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.search
function Search(props) {
  return (
    <form className="search">
      <div className="form-inline m-2">
        <label htmlFor="Search">Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter a last name"
          id="search"
        />        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
