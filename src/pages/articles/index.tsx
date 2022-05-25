import { PageRoute } from '../../routes';
import { Article1 } from './Article1';
import { Article2 } from './Article2';

export const articlesPageRoute: PageRoute[] = [
  {
    path: Article1.name,
    Page: Article1
  },
  {
    path: Article2.name,
    Page: Article2
  }
].map((route) => ({ ...route, path: `/${route.path}` }));
