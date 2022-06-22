import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { ReactNode } from 'react';
import { Page } from './Page';

enum DEPARTMENT {
  INFO = 'info',
  SUPPORT = 'support',
  HR = 'hr',
  SALES = 'sales'
}

const icons: Record<keyof typeof DEPARTMENT, ReactNode> = {
  INFO: <HelpOutlineOutlinedIcon />,
  SUPPORT: <SupportAgentOutlinedIcon />,
  HR: <HailOutlinedIcon />,
  SALES: <AttachMoneyOutlinedIcon />
};

export const Contact = () => {
  return (
    <Page title="Contact">
      <Typography variant="h3">Please contact us via:</Typography>
      <List>
        {(Object.keys(DEPARTMENT) as (keyof typeof DEPARTMENT)[]).map(
          (department) => {
            const mail = `${DEPARTMENT[department]}@apollos-cloud.xyz`;

            return (
              <ListItem>
                <a href={`mailto:${mail}`}>
                  <ListItemIcon>{icons[department]}</ListItemIcon>
                  <ListItemText>{mail}</ListItemText>
                </a>
              </ListItem>
            );
          }
        )}
      </List>
    </Page>
  );
};
