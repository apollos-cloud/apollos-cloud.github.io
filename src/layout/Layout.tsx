import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

const topAndBottoMStyle = { minHeight: '10%' };

interface LayoutProps {
  children?: ReactNode | ReactNode[] | undefined;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Grid container columns={12} id="layout">
      <Grid item container id="navigation-layout" style={topAndBottoMStyle}>
        <Navigation />
      </Grid>
      <Grid item container id="content-layout">
        {children}
      </Grid>
      <Grid
        item
        container
        id="footer-layout"
        style={{
          ...topAndBottoMStyle,
          padding: 10,
          backgroundColor: 'cornflowerblue',
          marginTop: '5%'
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
};
