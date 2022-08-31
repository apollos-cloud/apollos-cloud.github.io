import { Grid, Typography } from '@mui/material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { ReactNode } from 'react';
import { Page } from './Page';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <Typography variant="h5">
        We appreciate your interest in Apollo`s Cloud! Please select from the
        options below.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        venenatis, metus consequat fermentum iaculis, metus velit fermentum
        purus, id consequat quam enim sit amet enim. Aenean ultrices id sem ac
        vulputate. Vivamus egestas erat leo, ac vehicula ligula consectetur
        vitae. Etiam efficitur mollis quam, a viverra nibh tempus eget. Duis et
        pharetra quam, non faucibus est. Aliquam ullamcorper metus ex, eget
        malesuada risus tincidunt sed. Ut justo ligula, finibus nec tincidunt
        et, sagittis in purus. Proin cursus mollis est, in porta nisl vestibulum
        convallis. Cras molestie commodo fermentum. Donec laoreet lorem odio, eu
        venenatis urna lacinia vitae. Phasellus feugiat ligula eu ante maximus,
        vitae ultrices ipsum luctus. Morbi laoreet mi vel nisi facilisis
        ullamcorper sed sed est. Sed accumsan rutrum erat, ut eleifend quam
        dictum et.
      </Typography>

      <Grid container justifyContent={'center'}>
        <Grid item>
          {(Object.keys(DEPARTMENT) as (keyof typeof DEPARTMENT)[]).map(
            (department) => {
              const mail = `${DEPARTMENT[department]}@apollos-cloud.xyz`;

              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={mail}
                    id={mail}
                  >
                    <span>{DEPARTMENT[department]} </span>
                    <span> {icons[department]}</span>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                    <br />
                    <a href={`mailto:${mail}`}>{mail}</a>
                  </AccordionDetails>
                </Accordion>
              );
            }
          )}
        </Grid>
      </Grid>
    </Page>
  );
};
