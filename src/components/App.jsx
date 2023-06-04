import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" component={Home}>
          <Route path="movies" component={Movies} />
          <Route path="movies/:movieId" component={MovieDetails} />
          <Route path="movies/:movieId/cast" component={Cast} />
          <Route path="movies/:movieId/reviews" component={Reviews} />
          <Route path="/" />
        </Route>
      </Routes>
    </Suspense>
  );
};
