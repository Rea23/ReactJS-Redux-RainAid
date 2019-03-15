import React, { Component } from "react";
import "./Rate.css";

class Rate extends Component {
  constructor(props) {
    super(props);
    let rates = this.props.reviews.map(rec => rec.rate);

    this.state = {
      rates: rates
    };
  }

  onStarClick = rate => {
    this.setState({ rates: [...this.state.rates, rate] });
  };

  Calculate = () => {
    const sumRates = this.state.rates.reduce((sum, curr) => sum + curr);
    let result = +(sumRates / this.state.rates.length).toFixed(2);
    return result;
  };

  render() {
    return (
      <div>
        <p>
          <b>
            Current rate: {this.Calculate()} out of {this.state.rates.length}{" "}
            reviews.
          </b>
        </p>

        <div className="rate-div">
          <button
            className="rate-btns rate-btn1"
            onClick={() => this.onStarClick(1)}
          >
            1
          </button>
          <button
            className="rate-btns rate-btn2"
            onClick={() => this.onStarClick(2)}
          >
            2
          </button>
          <button
            className="rate-btns rate-btn3"
            onClick={() => this.onStarClick(3)}
          >
            3
          </button>
          <button
            className="rate-btns rate-btn4"
            onClick={() => this.onStarClick(4)}
          >
            4
          </button>
          <button
            className="rate-btns rate-btn5"
            onClick={() => this.onStarClick(5)}
          >
            5
          </button>
        </div>
      </div>
    );
  }
}

export default Rate;
