import React from "react";
import { TiWarning } from "react-icons/ti";


function Alert(props) {
  return (
    <div className="alert alert-warning" role="alert">
      <TiWarning /> {props.children}
    </div>    
  );
}

export default Alert;
