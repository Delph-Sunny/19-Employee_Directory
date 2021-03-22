import React from "react";
import { IoPeopleSharp } from 'react-icons/io5';
import "./style.css";

function Navbar() {
  return (
    <div className="flex-column row bg-dark text-white mb-3">
      <div className="col">
        <div className="text-light pt-2">
          <h1 className="display-4"><IoPeopleSharp /> Employee Directory</h1>
        </div>
        <div className="text-center text-light py-2">
          <h6>Filter or Sort the employee list</h6>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
