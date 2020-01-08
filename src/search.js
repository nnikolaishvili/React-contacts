import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          onChange={this.props.onSearch}
          value={this.props.value}
        />
        <br />
      </div>
    );
  }
}

export default Search;
