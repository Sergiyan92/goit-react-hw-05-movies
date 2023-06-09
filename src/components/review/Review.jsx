import React from 'react';
import PropTypes from 'prop-types';
const Review = ({ review }) => {
  return (
    <div>
      <h3> Author: {review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
Review.propTypes = {
  review: PropTypes.object.isRequired,
};
