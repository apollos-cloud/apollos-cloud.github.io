import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { pagesRoute } from './pages';

export const App = () => (
  <Layout>
    <Routes>
      {pagesRoute.map(({ Page, path }) => (
        <Route path={path} key={path} element={<Page />} />
      ))}
    </Routes>
  </Layout>
);
