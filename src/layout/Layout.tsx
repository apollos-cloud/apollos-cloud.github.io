import { Grid } from '@mui/material';
import { FC, ReactNode } from 'react';
import FloatingWhatsApp from 'react-floating-whatsapp';
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
          backgroundColor: 'cornflowerblue'
        }}
      >
        <Footer />
      </Grid>
      <FloatingWhatsApp
        phoneNumber="+491777198008"
        accountName="Apollo`s Cloud"
        statusMessage="We will get back to you as soon as possible"
        chatMessage="How can we help you? leave us your thoughts!"
        placeholder="Your message..."
        avatar={'https://tibet.net/wp-content/uploads/2011/09/HHDL.png'}
        notification={true}
      />
    </Grid>
  );
};
