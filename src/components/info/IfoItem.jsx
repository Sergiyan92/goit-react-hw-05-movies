import { Link } from 'react-router-dom';

export const IfoItem = () => {
  return (
    <div>
      <p>Additional information</p>
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
    </div>
  );
};
