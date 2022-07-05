import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
  </Grid>
);
