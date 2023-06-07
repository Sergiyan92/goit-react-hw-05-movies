import { useState, useEffect } from 'react';
import CastItem from '../../components/cast/CastItem';
import { useParams } from 'react-router-dom';
import { getCast } from 'service/service';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getCast(movieId)
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {data?.cast.map(cast => (
        <li key={cast.id}>
          <CastItem cast={cast} />
        </li>
      ))}
    </ul>
  );
};
export default Cast;
