import { FC, ReactNode } from 'react';
import { Route } from 'react-router-dom';
import { articlesPageRoute } from './pages/articles';
import { Client } from './pages/Client';
import { Contact } from './pages/Contact';
import { Intro } from './pages/Intro';
import { NotFound } from './pages/NotFound';
import { WorkFlow } from './pages/WorkFlow';

export interface PageRoute {
  path: string;
  Page?: FC;
  routes?: PageRoute[];
}

export const createRoute = (
  Page: FC | undefined,
  path: string,
  name?: string,
  routes?: ReactNode[]
) => {
  return Page !== undefined ? (
    <Route path={path} key={path} element={<Page />}>
      {!name ? path.slice(1) : name}
    </Route>
  ) : (
    <Route path={path} key={path}>
      {routes}
    </Route>
  );
};

export const presentationRoutes: PageRoute[] = [
  {
    path: '/',
    Page: Intro
  },
  {
    path: '/contact',
    Page: Contact
  },
  {
    path: '/workflow',
    Page: WorkFlow
  },
  {
    path: '/client',
    Page: Client
  },
  {
    path: '/articles/:article',
    routes: articlesPageRoute
  }
];

export const errorRoutes: PageRoute[] = [
  {
    path: '*',
    Page: NotFound
  }
];

export const pagesRoute: PageRoute[] = [...presentationRoutes, ...errorRoutes];

const createCanonialRoutes = (route: PageRoute): ReactNode => {
  if (!route?.routes && route.Page) {
    return createRoute(route.Page, route.path);
  } else if (route?.routes) {
    return createRoute(
      undefined,
      route.path,
      route.path.substring(1, route.path.lastIndexOf('/')),
      route.routes.map((childRoute) =>
        createCanonialRoutes({
          ...childRoute,
          path: route.path + childRoute.path
        })
      )
    );
  }

  return <Route />;
};

export const appRoutes = pagesRoute.map((route) => createCanonialRoutes(route));
