import { Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { appRoutes } from './pages';
console.log('APP ROUTES ', appRoutes);

export const App = () => (
  <Layout>
    <Routes>{appRoutes}</Routes>
  </Layout>
);
