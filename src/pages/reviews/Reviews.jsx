import Review from 'components/review/Review';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieIdReviews } from 'service/service';
import css from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getMovieIdReviews(movieId)
      .then(response => setData(response))
      .catch(error => console.error(error));
  }, [movieId]);
  return (
    <div className={css.review}>
      {!data?.results.length ? (
        <p>We don't have ani reviews for this movie</p>
      ) : (
        data.results.map(review => <Review key={review.id} review={review} />)
      )}
    </div>
  );
};
export default Reviews;
