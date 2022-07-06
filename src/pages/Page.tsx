import { Grid, Typography } from '@mui/material';
import { Tags } from 'components/Tags';
import { FC, ReactNode } from 'react';
import { Job } from 'types/jobs';
import { WorkingEnvironment } from 'types/products';

export interface PageProps {
  title: string;
  children?: ReactNode | ReactNode[];
  tags?: Array<Job | WorkingEnvironment>;
}

export const Page: FC<PageProps> = ({ title, children, tags = [] }) => (
  <Grid
    container
    item
    direction="column"
    justifyContent="space-around"
    alignItems="stretch"
    rowSpacing={10}
  >
    <Grid item textAlign={'center'}>
      <Typography variant="h3">{title}</Typography>
    </Grid>

    <Grid item>{children}</Grid>
    <Grid
      item
      container
      direction="column"
      justifyContent="space-around"
      alignItems="stretch"
      rowSpacing={2}
    >
      {tags && tags.length !== 0 && (
        <>
          <Grid item>
            <Typography color="text.secondary">Tags in Page</Typography>
          </Grid>
          <Grid item>
            <Tags tags={tags} />
          </Grid>
        </>
      )}
    </Grid>
  </Grid>
);
