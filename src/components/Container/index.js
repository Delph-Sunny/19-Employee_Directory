import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    error: "",
  };

  // When the component mounts, get a list of all available employees
  componentDidMount() {
    API.getEmployeeList()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => this.setState({ error: err.message }));
  }

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({ search: value });
    this.setState({ query: value });
    // this.filteredEmployees.filter({value})
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // API.getfilteredList(this.state.search)
    //   .then((res) => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div className="container m-3">
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div className="container m-3">
          <Table
            state={this.state}
            filteredEmployees={this.filteredEmployees}
          />
        </div>
      </div>
    );
  }
}

export default Container;
