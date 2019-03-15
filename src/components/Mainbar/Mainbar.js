import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_products } from "../../actions/productsAction";
import { Link } from "react-router-dom";
import "./Mainbar.css";
import FavBtn from "../FavBtn/FavBtn";
import Rate from "../Rate/Rate";
import Search from "../Search/Search";

class Mainbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }
  componentDidMount() {
    this.props.fetch_products();
    this.setState({ ready: true });
  }

  OnClickDetails = id => {
    this.props.details(id);
};

  render() {
    const { products } = this.props;
    let Products = products.map(Product => {
      return (
        <div className="product" key={Product.id}>
          <div className="img-div">
            <img
              className="img"
              src={require("../../assets/images/" + Product.picture)}
              alt={Product.name}
            />
          </div>
          <div className="second-col">
            <h2 className="product-header">
              <Link to={"details/" + Product.id} onClick={() => this.OnClickDetails(Product.id)} className="product-link">{Product.name}</Link>
            </h2>
            <p className="product-price">
              <b>${Product.price}</b>
            </p>
            <FavBtn prod={Product} className="product-fav" />
          </div>
          <p className="product-description">{Product.description}</p>
          <Rate reviews={Product.reviews} className="product-reviews" />
        </div>
      );
    });
    return (
      <div>
        {this.state.ready && (
          <div>
            <Search />
            <div>{Products}</div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.search_result
});

export default connect(
  mapStateToProps,
  { fetch_products }
)(Mainbar);
