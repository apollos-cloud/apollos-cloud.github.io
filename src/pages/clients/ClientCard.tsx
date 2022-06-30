import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { ProductType } from 'types/products';
import { Technology } from 'types/technologies';
import { Tags } from 'components/Tags';

export interface CompanySize {
  size: 'small' | 'meduim' | 'large';
  numberOfEmployees: {
    from: number;
    to: number;
  };
}

export interface ClientCard {
  name: string;
  location: string;
  productType: ProductType[];
  imageSrc: string;
  description: string;
  tags: Technology[];
  companySize: CompanySize;
}

export const ClientCard: FC<ClientCard> = ({
  description,
  imageSrc,
  location,
  name,
  productType,
  companySize,
  tags
}) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.30)' }}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image={imageSrc}
        alt={`${name}-company-logo`}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText>location: {location}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CategoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              Product type: <Tags tags={productType} />
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <ApartmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText>
              Company size:{' '}
              {`${companySize.size}, ${companySize.numberOfEmployees.from}-${companySize.numberOfEmployees.to}`}
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Tags tags={tags} />
      </CardContent>
      <CardActions>
        <Button size="small">
          <ShareOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
