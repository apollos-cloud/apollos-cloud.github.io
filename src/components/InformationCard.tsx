import { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface InformationCardProps {
  headline: string;
  paragraph: string;
}

export const InformationCard: FC<InformationCardProps> = ({
  headline,
  paragraph
}) => {
  return (
    <Card sx={{ width: '-webkit-fill-available' }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {headline}
        </Typography>
        <Typography variant="body2">{paragraph}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
