import Navigation from 'components/Navigation/Navigation';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';

const Home = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorites = lazy(() => import('pages/FavoritesPage'));

const appRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
];

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback="Loading...">
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

        </Routes>
      </Suspense>
    </>
  );
};
