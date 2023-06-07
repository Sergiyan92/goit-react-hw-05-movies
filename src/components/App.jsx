import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Heder from './heder/Heder';
const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const MovieDetails = lazy(() => import('../pages/moviedetails/MovieDetails'));
const Cast = lazy(() => import('../pages/cast/Cast'));
const Reviews = lazy(() => import('../pages/reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Heder />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
