import React from 'react';

const Review = ({ review }) => {
  return (
    <div>
      <h3> Author: {review.author}</h3>
      <p>{review.content}</p>
    </div>
  );
};

export default Review;
