import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    error: "",
  };

  // When the component mounts, get a list of all available employees
  componentDidMount() {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => this.setState({ error: err.message }));
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value);
  };

  // Filter the list based on the value
  filterEmployees = (value) => {
    this.setState({
      employees: this.state.employees.filter((employee) => {
        // Looking for a character or more into the last name and first name
        return (employee.name.last.toLowerCase().includes(value.toLowerCase().trim()) ||
        employee.name.first.toLowerCase().includes(value.toLowerCase().trim()));
      }),
    });
  };

  render() {
    return (
      <div className="container m-3">
        <div className="col-sm-10 offset-1">
          <Search
            value={this.state.search}
            handleInputChange={this.handleInputChange}
          />
          <div className=" table-responsive-md">
            <Table state={this.state} filterEmployees={this.filterEmployees} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
