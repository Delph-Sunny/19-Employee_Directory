import React from "react";
import { BsSearch } from 'react-icons/bs';
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.search
function Search(props) {
  return (
    // <form className="search ">
    //   <div className="row ">
    //     <label className="col-sm-1 col-form-label" htmlFor="search">
    //     <BsSearch />
    //     </label>
    //     <div className="col-sm-11">
    //       <input
    //         value={props.search}
    //         onChange={props.handleInputChange}
    //         name="search"
    //         type="text"
    //         className="form-control"
    //         placeholder="Type here to filter..."
    //         id="search"
    //       />
    //       {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
    //       Search
    //     </button> */}
    //     </div>
    //   </div>
    // </form>
    <form>
      <div className="inner-form">
        <div className="input-field">
          <button className="btn-search">
            <BsSearch />
          </button>
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
