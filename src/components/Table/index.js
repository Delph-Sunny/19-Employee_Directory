import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {props.state.filteredEmployees.map((employee) => {
          return (
            <tr key={employee.id.value}>
              <td>
                <img
                  src={employee.picture.thumbnail}
                  alt={employee.name.last}
                />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>              
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.location.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
