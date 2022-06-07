import { PageRoute } from '../../routes';
import { Article1 } from './Article1';
import { Article2 } from './Article2';

export const articlesPageRoute: PageRoute[] = [
  {
    path: 'Article1',
    Page: Article1
  },
  {
    path: 'Article2',
    Page: Article2
  }
].map((route) => ({ ...route, path: `/${route.path}` }));
