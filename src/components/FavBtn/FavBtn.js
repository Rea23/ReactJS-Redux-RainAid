import React, { Component } from "react";
import "./FavBtn.css";
import { connect } from "react-redux";
import { AddFavorites, RemoveFavorites } from "../../actions/favoritesAction";

class FavBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: this.props.addedItems.find(item => item.id === this.props.prod.id) ? true : false
    };
  }
  onHeartClick = prod => {
    this.setState({ added: !this.state.added });
    if (this.state.added)    {
      this.props.RemoveFavorites(prod.id);
    } else {
      this.props.AddFavorites(prod);
    }
  };

  render() {
    const { prod } = this.props;
    let cls = this.state.added ? '2' : '1';
    return (
      <i
        title="Favourite"
        className={"fas fa-heart fav-btn" + cls}
        onClick={() => this.onHeartClick(prod)}
      />
    );
  }
}

const mapStateToProps = state => ({
  addedItems: state.favlist.favorites
});

export default connect(
  mapStateToProps,
  { AddFavorites, RemoveFavorites }
)(FavBtn);
