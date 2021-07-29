import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => {
    let reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId )
    return reviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview}/>)
  }
  render() {
    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
          {/* {this.renderReviews} */}
        </ul>
      </div>
    );
  }
};

export default Reviews;