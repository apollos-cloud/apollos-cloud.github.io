import {
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel
} from '@mui/material';
import { Page } from './Page';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

const sendmail = require('sendmail')({
  logger: {
    debug: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error
  },
  silent: false
});

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ONCHANGE ', e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    sendmail(
      {
        from: 'info@apollos-cloud.xyz',
        to: 'omri.wallach@apollos-cloud.xyz',
        subject: form.subject,
        html: form.message
      },
      function (err: { stack: any }, reply: any) {
        console.log(err && err.stack);
        console.dir(reply);
      }
    );
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

        <Grid item sx={{ width: '100%' }}>
          <Box
            alignItems={'center'}
            justifyItems={'center'}
            component="form"
            autoComplete="off"
            action="mailto:omri.wallach@apollos-cloud.xyz"
            method="post"
          >
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="name">Full Name</InputLabel>
              <OutlinedInput
                onChange={onChange}
                name="name"
                label="Full Name"
                value={form.name}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <OutlinedInput
                onChange={onChange}
                name="subject"
                label="Subject"
                value={form.subject}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                onChange={onChange}
                type="email"
                name="email"
                label="Email"
                value={form.email}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="content">Content</InputLabel>
              <OutlinedInput
                onChange={onChange}
                label="Content"
                type={'TextareaAutosize'}
                name="content"
                sx={{ height: 400 }}
                value={form.message}
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              fullWidth
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
