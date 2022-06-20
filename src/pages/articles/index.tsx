import { PageRoute } from '../../routes';
import { ProjectManagement } from './ProjectManagement';
import { AgileEnvironment } from './AgileEnvironment';
import { TeamManagement } from './TeamManagement';

export const articlesPageRoute: PageRoute[] = [
  {
    path: 'Project Management',
    Page: ProjectManagement
  },
  {
    path: 'Agile Environment',
    Page: AgileEnvironment
  },
  {
    path: 'Team Management',
    Page: TeamManagement
  }
].map((route) => ({ ...route, path: `/${route.path}` }));
