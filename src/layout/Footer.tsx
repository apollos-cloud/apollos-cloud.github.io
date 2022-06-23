import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';
import FloatingWhatsApp from 'react-floating-whatsapp';

const StyleContainer = styled(Container)(() => ({ margin: 'auto' }));

export const Footer = () => (
  <StyleContainer>
    <Typography variant="body1">My sticky footer can be found here.</Typography>
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://apollos-cloud.xyz">
        apollos-cloud.xyz
      </Link>{' '}
      {new Date('2022').getFullYear()}
      {'.'}
    </Typography>
    <FloatingWhatsApp
      phoneNumber="+491777198008"
      accountName="Apollo`s Cloud"
      statusMessage="We will get back to you as soon as possible"
      chatMessage="How can we help you? leave us your thoughts!"
      placeholder="Your message..."
      avatar={undefined}
      notification={true}
      notificationSound={true}
    />
  </StyleContainer>
);
