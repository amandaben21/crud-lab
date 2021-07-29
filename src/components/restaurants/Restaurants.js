import React, { Component } from 'react';
import Restaurant from './Restaurant';
//Restaurants component that renders a list of restaurants
class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/> )}
      </ul>
    );
  }
};

export default Restaurants;