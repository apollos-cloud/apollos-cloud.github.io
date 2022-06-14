import { PageRoute } from '../../routes';
import { Consultancy } from './Consultancy';
import { Development } from './Development';
import { Mentoring } from './Mentoring';

export const servicesPageRoute: PageRoute[] = [
  {
    path: 'Consultancy',
    Page: Consultancy
  },
  {
    path: 'Mentoring',
    Page: Mentoring
  },
  {
    path: 'Development',
    Page: Development
  }
].map((route) => ({ ...route, path: `/${route.path}` }));
