import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

//Restaurant component that is responsible for each individual restaurant
class Restaurant extends Component {

  render() {
    const { restaurant, deleteRestaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id) }> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;