import React from "react";
import "./Sidebar.css";
import { connect } from "react-redux";

const Sidebar = ({ items }) => {
  return (
    <div className="sidebar">
      <h2 className="header-fav">Favourites</h2>
      {items.map((Product) => {
        return (
          <div className="product-div">
            <img
              className="img"
              src={require("../../assets/images/" + Product.picture)}
              alt="name"
            />
            <div className="product-info">
              <h4>
                <b>{Product.name}</b>
              </h4>
              <p>${Product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.favlist.favorites
});

export default connect(mapStateToProps)(Sidebar);
