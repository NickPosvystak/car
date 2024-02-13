import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const Main = lazy(() => import('pages/MainPage'));
const Catalog = lazy(() => import('pages/CatalogPage'));
const Favorite = lazy(() => import('pages/FavoritePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorite />} />
    </Routes>
  );
};
