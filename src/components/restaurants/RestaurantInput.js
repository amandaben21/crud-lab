import React, { Component } from 'react';

//allows a user to create new restaurants
class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Resturant</label>
          <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
