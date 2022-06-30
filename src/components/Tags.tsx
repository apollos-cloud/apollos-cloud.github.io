import { Stack, Chip } from '@mui/material';
import { FC } from 'react';

export interface TagsProps {
  tags: string[];
}

export const Tags: FC<TagsProps> = ({ tags }) => (
  <Stack spacing={1} sx={{ display: 'block' }}>
    {tags.map((tag) => (
      <Chip label={tag} variant="outlined" style={{ margin: 2 }} />
    ))}
  </Stack>
);
