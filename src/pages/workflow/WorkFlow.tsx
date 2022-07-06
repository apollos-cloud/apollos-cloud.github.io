import { Grid } from '@mui/material';
import { Timeline } from 'components/Timeline';
import { Page } from '../Page';
import { AgileDiagram } from './AgileDiagram';
import { information } from './Information';
import Gradient from 'javascript-color-gradient';

const pointsColor = new Gradient()
  .setColorGradient('#FF3933', '#33FF9F')
  .setMidpoint(information.length)
  .getColors();

export const WorkFlow = () => (
  <Page
    title="Optimizied workflow of the software development life cylce"
    tags={[
      'Project Management',
      'Clients Management',
      'Jira',
      'Leadership',
      'Stackholders Management',
      'Software Architecture',
      'Agile',
      'Budget Management',
      'Team Management'
    ]}
  >
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        container
        item
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        sx={{ position: 'relative', overflowX: 'hidden', width: '50%' }}
        spacing={10}
      >
        <Timeline position="right" colors={pointsColor} checks>
          {information}
        </Timeline>
      </Grid>

      <Grid item sx={{ width: '50%' }}>
        <AgileDiagram />
      </Grid>
    </Grid>
  </Page>
);
