import React from "react";
import { TiWarning } from "react-icons/ti";


function Alert(props) {
  return (
    <div className={`alert alert-${props.type} fade in`} role="alert"
    style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}>
      <TiWarning /> {props.children}
    </div>    
  );
}

export default Alert;
