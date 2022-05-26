import {
  Box,
  Grid,
  TextField,
  Typography,
  InputLabel,
  Button
} from '@mui/material';
import { Page } from './Page';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styled from '@emotion/styled';

const width = 400;
const StyledTextField = styled(TextField)(() => ({ width, marginBottom: 25 }));

export const Contact = () => {
  const onSubmit = () => {
    console.log('SSS ', document.getElementsByName('client'));
  };

  return (
    <Page title="Contact">
      <Grid
        container
        item
        style={{
          padding: '0 10%',
          textAlign: 'center',
          justifyContent: 'center'
        }}
      >
        <Grid item>
          <Typography variant="h2">
            We would love to hear more from you!
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            imperdiet laoreet neque non pretium. Fusce non laoreet lacus.
            Suspendisse tincidunt sapien quis posuere scelerisque. Praesent nec
            viverra elit. Aenean ac commodo massa, sed rhoncus lacus. Nullam
            tempor tristique urna. Nulla facilisi. Sed sed porttitor dui. Nunc
            at ipsum ut lorem rhoncus mollis. Sed gravida vel dolor at
            tincidunt. Nulla vitae molestie nibh. Cras sit amet augue in nisl
            hendrerit gravida. Curabitur sed lacinia augue. Nam molestie elit et
            mauris sodales, non iaculis turpis blandit. Proin hendrerit, felis a
            feugiat maximus, nisi justo aliquam velit, eu posuere massa libero
            eget felis.
          </Typography>
        </Grid>

        <Grid item>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              width,
              maxWidth: '100%'
            }}
          >
            <StyledTextField
              label="Full Name"
              variant="standard"
              name="client[name]"
            />
            <StyledTextField
              label="Subject"
              variant="standard"
              name="client[subject]"
            />
            <StyledTextField
              label="Email"
              variant="standard"
              type="email"
              name="client[email]"
            />
            <InputLabel>Content</InputLabel>
            <TextareaAutosize
              maxRows={10}
              aria-label="maximum height"
              placeholder="Message"
              defaultValue=""
              style={{ width, height: 400 }}
              name="client[content]"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};
