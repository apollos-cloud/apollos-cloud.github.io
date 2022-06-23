import { Grid, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface PageProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export const Page: FC<PageProps> = ({ title, children }) => (
  <Grid container item direction="column" rowSpacing={10}>
    <Grid item textAlign={'center'}>
      <Typography variant="h1">{title}</Typography>
    </Grid>

    <Grid item>{children}</Grid>
  </Grid>
);
