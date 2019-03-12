import React, { Component } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import FavBtn from "../FavBtn/FavBtn";
import Rate from "../Rate/Rate";
import { connect } from "react-redux";
import { fetch_products } from "../../actions/productsAction";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loaded: false,
      // product: {},
      choosed: this.props.obj
    };
  }

  // componentDidMount() {
  //   // fetch("http://localhost:3000/products.json")
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //       this.props.fetch_products();
  //       this.setState({
  //         loaded: true,
  //         // product: this.props.products,
  //         product: this.props.products.find(prod => prod.id === this.props.prod_id)
  //       });
  //     // });
  // }

  render() {
    return (
      <div class="content">
        <div class="content-header">
          <Link to="/" id="back-link">
            Back
          </Link>
          <h1>{this.state.choosed.name}</h1>
          <div id="info-div">
            <h3 id="product-price">${this.state.choosed.price}</h3>
            {/* <FavBtn id="product-fav" /> */}
          </div>
        </div>
        <div class="main-content">
          <div class="img-div">
            <img
              id="img"
              src={require("../../assets/images/" + this.state.choosed.picture)}
              alt={this.state.choosed.name}
            />
          </div>
          <p>{this.state.choosed.description}</p>
        </div>
        {/* <Rate id="product-reviews" /> */}
        <br />
        <br />
        <div>
          <h2>Reviews</h2>
          <div class="reviews-div">
            {this.state.choosed.reviews.map(Review => {
              return (
                <p class="comment-div">
                  {Review.rate === 5 && (
                    <div class="comm-rate-btns" id="rate-div5">
                      5
                    </div>
                  )}
                  {Review.rate === 4 && (
                    <div class="comm-rate-btns" id="rate-div4">
                      4
                    </div>
                  )}
                  {Review.rate === 3 && (
                    <div class="comm-rate-btns" id="rate-div3">
                      3
                    </div>
                  )}
                  {Review.rate === 2 && (
                    <div class="comm-rate-btns" id="rate-div2">
                      2
                    </div>
                  )}
                  {Review.rate === 1 && (
                    <div class="comm-rate-btns" id="rate-div1">
                      1
                    </div>
                  )}
                  <b>{Review.username}&nbsp;</b>
                  {Review.comment}
                  <br />
                </p>
              );
            })}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Details;

// const mapStateToProps = state => ({
//   products: state.products.products
// });

// export default connect(
//   mapStateToProps,
//   { fetch_products }
// )(Details);
