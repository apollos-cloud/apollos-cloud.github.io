import {
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { Page } from '../Page';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import { EmailAdapter } from './EmailAdapter';

enum DEPARTMENT {
  INFO = 'info',
  SUPPORT = 'support',
  HR = 'hr',
  SALES = 'sales'
}

export interface Message {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export interface EmailParams extends Message {
  department: DEPARTMENT;
}

export const Contact = () => {
  const [department, setDepartment] = useState<DEPARTMENT | undefined>();
  const [form, setForm] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const onChangeMessageValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const onChangeDepartment = (e: SelectChangeEvent<DEPARTMENT>) => {
    setDepartment(e.target.value as DEPARTMENT);
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log('ENV ', process.env.EMAIL_API_KEY);

    const params: EmailParams = {
      ...form,
      department: department || DEPARTMENT.INFO
    };

    await EmailAdapter.getInstance().sendEmail(params);
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
                onChange={onChangeMessageValues}
                name="name"
                label="Full Name"
                value={form.name}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <OutlinedInput
                onChange={onChangeMessageValues}
                name="subject"
                label="Subject"
                value={form.subject}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="department">Department</InputLabel>
              <Select
                name="department"
                value={department}
                defaultValue={undefined}
                label="Department"
                onChange={onChangeDepartment}
              >
                {Object.values(DEPARTMENT).map((department) => (
                  <MenuItem value={department} key={department}>
                    {department}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                onChange={onChangeMessageValues}
                type="email"
                name="email"
                label="Email"
                value={form.email}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="content">Content</InputLabel>
              <OutlinedInput
                onChange={onChangeMessageValues}
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
