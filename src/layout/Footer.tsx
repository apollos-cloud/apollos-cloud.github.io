import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';

const StyleContainer = styled(Container)(() => ({ margin: 'auto' }));

export const Footer = () => (
  <StyleContainer>
    <Typography variant="body1">My sticky footer can be found here.</Typography>
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date('2022').getFullYear()}
      {'.'}
    </Typography>
  </StyleContainer>
);
