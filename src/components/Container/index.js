import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import Alert from "../Alert";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    sortingDirection: "asc",
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
      .catch((err) => {
        this.setState({ error: err.message });
        console.log("error: ", this.state.error); // FOR TESTING
      });
  }

  handleInputChange = async (event) => {
    const value = event.target.value;
    await this.setState({ search: value });
    this.filterEmployees(value);
  };

  // Filter the list based on the value
  filterEmployees = async (value) => {
    await this.setState({
      filteredEmployees: this.state.employees.filter((employee) => {
        // Looking for a character or more into the last name and first name
        return (
          employee.name.last
            .toLowerCase()
            .includes(value.toLowerCase().trim()) ||
          employee.name.first.toLowerCase().includes(value.toLowerCase().trim())
        );
      }),
    });
    this.errorMessage(this.state.filteredEmployees); // Checking if result is an empty array
  };

  // Message if no result found
  errorMessage = (value) => {
    if (value.length === 0) {
      let err = "Sorry, no results found. Try a different filter criteria.";
      this.setState({ error: err });
    } else {
      this.setState({ error: "" });
    }
  };

  sortName = (key) => {
    let sortedList;
    let direction;
    // Sort by last name or first name
    switch (key) {
      case `last`:
        if (this.state.sortingDirection === "asc") {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.last > b.name.last ? 1 : -1
          );
          direction = "dsc";
        } else {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.last < b.name.last ? 1 : -1
          );
          direction = "asc";
        }
        break;
      case `first`:
        if (this.state.sortingDirection === "asc") {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.first > b.name.first ? 1 : -1
          );
          direction = "dsc";
        } else {
          sortedList = this.state.filteredEmployees.sort((a, b) =>
            a.name.first < b.name.first ? 1 : -1
          );
          direction = "asc";
        }
        break;
      default:
        // nothing selected by default
        break;
    }
    this.setState({
      filteredEmployees: sortedList,
      sortingDirection: direction,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="container">
            <Search
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
            <div className="fixed-table-container fixed-height table-responsive-md">
              <Table
                state={this.state}
                filterEmployees={this.filterEmployees}
                sortName={this.sortName}
              />
            </div>
            {/* //Error message if API call issues or empty array */}
            <Alert
              type="warning"
              style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
            >
              {this.state.error}
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
