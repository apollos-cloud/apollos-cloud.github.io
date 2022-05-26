import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface PageProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export const Page: FC<PageProps> = ({ title, children }) => (
  <Grid container item>
    <Grid item>{title}</Grid>

    <Grid item>{children}</Grid>
  </Grid>
);
