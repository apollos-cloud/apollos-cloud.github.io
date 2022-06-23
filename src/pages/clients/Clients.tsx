import { Page } from '../Page';
import { clientsData } from './clientsData';
import { ClientCard } from './ClientCard';

export const Client = () => (
  <Page title="Out Clients">
    {clientsData.map((data) => (
      <ClientCard {...data} />
    ))}
  </Page>
);
