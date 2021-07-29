import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

//RestaurantsContainer component that will connect to Redux and pass the appropriate props down to its children
class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants    
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    addRestaurant: (text) => dispatch({type:"ADD_RESTAURANT", payload: text}),
    deleteRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", payload: id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsContainer);