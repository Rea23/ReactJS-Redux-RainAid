import React, { Component } from "react";
import "./Search.css";
import { connect } from "react-redux";
import { search_products } from "../../actions/productsAction";

class Search extends Component {
  onChange = e => {
    this.props.search_products(e.target.value);
  };
  render() {
    return (
      <div className="search-div">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { search_products }
)(Search);
