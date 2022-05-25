import { Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { appRoutes } from './routes';

export const App = () => (
  <Layout>
    <Routes>{appRoutes}</Routes>
  </Layout>
);
