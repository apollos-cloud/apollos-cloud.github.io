import { Grid } from '@mui/material';
import { CSSProperties, FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

interface LayoutProps {
  children?: ReactNode | ReactNode[] | undefined;
}

const contentStyle: CSSProperties = {
  height: '75%'
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container columns={12} id="layout">
      <Grid item container>
        <Navigation />
      </Grid>
      <Grid item container style={contentStyle}>
        {children}
      </Grid>
      <Grid item container>
        <Footer />
      </Grid>
    </Grid>
  );
};
