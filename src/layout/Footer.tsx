import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { Grid } from '@mui/material';
import { SocialMediaIcon, companySocialLinks } from 'components/SocialIcon';

export const Footer = () => (
  <Grid container>
    <Grid item container md={2}>
      <Grid container>
        <Typography variant="h5" color="text.primary">
          Find us on social media!
        </Typography>
      </Grid>
      <Grid container>
        <SocialMediaIcon {...companySocialLinks} />
      </Grid>
    </Grid>
    <Grid item md={8} sx={{ textAlign: 'center', marginTop: 'auto' }}>
      <Typography variant="body1">
        Designed and developed by{' '}
        <Link color="inherit" href="https://apollos-cloud.xyz">
          Omri Wallach CEO & Software Architect at Apollo`s Cloud
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/omri-wallach-19989a113/"
        >
          Apollo`s Cloud
        </Link>{' '}
        {new Date('2022').getFullYear()}
        {'.'}
      </Typography>
    </Grid>
    <Grid item md={2}>
      <FloatingWhatsApp
        phoneNumber="+491777198008"
        accountName="Apollo`s Cloud"
        statusMessage="We will get back to you as soon as possible"
        chatMessage="How can we help you? leave us your thoughts!"
        placeholder="Your message..."
        avatar={undefined}
        notification={true}
      />
    </Grid>
  </Grid>
);
