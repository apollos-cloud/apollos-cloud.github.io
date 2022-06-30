import { Page } from '../Page';
import { clientsData } from './clientsData';
import { ClientCard } from './ClientCard';
import { Grid } from '@mui/material';

export const Client = () => (
  <Page title="Out Clients">
    <Grid container spacing={2}>
      {clientsData.map((data) => (
        <Grid item>
          <ClientCard {...data} />
        </Grid>
      ))}
    </Grid>
  </Page>
);
