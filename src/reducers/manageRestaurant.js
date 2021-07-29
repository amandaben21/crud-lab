import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewsReducer
})

export default rootReducers;

function restaurantReducer(state = [], action){
  switch(action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.payload
      }
      return state.concat(restaurant)

    case "DELETE_RESTAURANT":
      return [...state.filter(restaurant => restaurant.id !== action.payload)] 

    default:
      return state
  }
}

function reviewsReducer(state = [], action){
  // console.log(action)
  switch(action.type) {
    case "ADD_REVIEW":
      // const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      const review = {
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      }
      return state.concat(review)

    case "DELETE_REVIEW":
      return [...state.filter(review => review.id !== action.payload)] 
      
    default:
      return state
  }
}