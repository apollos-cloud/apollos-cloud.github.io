import { Page } from '../Page';
import { clientsData } from './clientsData';
import { ClientCard } from './ClientCard';
import { Grid } from '@mui/material';

export const Client = () => (
  <Page title="Our Clients">
    <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
      {clientsData
        .map((data) => (
          <Grid item key={data.name}>
            <ClientCard {...data} />
          </Grid>
        ))
        .reverse()}
    </Grid>
  </Page>
);
