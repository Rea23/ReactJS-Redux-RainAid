import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mainbar from "./components/Mainbar/Mainbar";
import Details from "./components/Details/Details";
import store from "./store";
import Sidebar from "./components/Sidebar/Sidebar";
import Products from "./assets/products.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productObj: 0
    };
  }

  ShowDetails(id) {
    let product = Products.find(prod => {
      return prod.id === id;
    });
    this.setState({ productObj: product });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="site">
            <Header />
            <main className="main-site">
              <div className="router-main">
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Mainbar {...props} details={this.ShowDetails.bind(this)} />
                  )}
                />
                <Route
                  path="/details/:id"
                  render={props => (
                    <Details {...props} obj={this.state.productObj} />
                  )}
                />
              </div>
              <Sidebar />
            </main>
            <footer>Made by Rea Sunara - 2019</footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
