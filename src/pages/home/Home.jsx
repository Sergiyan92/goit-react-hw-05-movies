import Trending from 'components/popular/Trending';
import { useEffect, useState } from 'react';
import { getAllmovies } from 'service/service';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getAllmovies()
      .then(response => setTrending(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <Trending trending={trending} />
    </>
  );
};
export default Home;
