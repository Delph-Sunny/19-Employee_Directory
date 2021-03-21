import React from "react";
import "./style.css";
import { BiSort } from 'react-icons/bi';


function Table(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">
          <span className="th-inner sortable both" onClick={()=> props.sortName('first')}>First&#160;name&#160;<BiSort /></span>
          </th>
          <th scope="col">
            <span className="th-inner sortable both" onClick={()=> props.sortName('last')}>Last&#160;name&#160;<BiSort /></span>
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone&#160;number</th>
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
