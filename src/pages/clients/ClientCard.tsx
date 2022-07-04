import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { ProductType, WorkingEnvironment } from 'types/products';
import { Technology } from 'types/technologies';
import { Tags } from 'components/Tags';
import { Job } from 'types/jobs';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import imageNotFoundReplacement from 'assets/images/imageNotFoundReplacement.png';

export interface CompanySize {
  size: 'small' | 'medium' | 'large';
  numberOfEmployees: {
    from: number;
    to: number;
  };
}

export interface ClientCard {
  name: string;
  location: string;
  productType: ProductType[];
  imageSrc?: string;
  description: string;
  technologyTags: Technology[];
  responsibilityTags: Job[];
  workingEnvironmentTags: WorkingEnvironment[];
  companySize: CompanySize;
}

export const ClientCard: FC<ClientCard> = ({
  description,
  imageSrc,
  location,
  name,
  productType,
  companySize,
  technologyTags,
  responsibilityTags,
  workingEnvironmentTags
}) => {
  const [expended, setExpended] = useState(true);
  const [expendHeight, setExpendHeight] = useState<string | number>('auto');
  const onToggleInformation = () => setExpended(!expended);

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'rgba(255, 255, 255, 0.30)' }}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        sx={{
          minHeight: 100,
          maxHeight: 100,
          objectFit: 'contain'
        }}
        image={imageSrc ? imageSrc : imageNotFoundReplacement}
        alt={`${name}-company-logo`}
      />
      <CardContent
        ref={(ref) => {
          if (ref && expendHeight === 'auto') {
            setExpendHeight(Number(ref?.clientHeight));
            setExpended(false);
          }
        }}
        style={{
          transition: 'all 500ms ease-in-out',
          height: expended ? expendHeight : 0,
          overflowY: 'hidden',
          minHeight: 300
        }}
      >
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Location: {location}</ListItemText>
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
              {`${companySize.size}, ${companySize.numberOfEmployees.from} - ${companySize.numberOfEmployees.to} Employees`}
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>

        <br />
        <Typography variant="body2" color="text.secondary">
          Responsibilities
        </Typography>
        <br />
        <Tags tags={responsibilityTags} />
        <br />
        <Typography variant="body2" color="text.secondary">
          Environment
        </Typography>
        <br />
        <Tags tags={workingEnvironmentTags} />
        <br />
        <Typography variant="body2" color="text.secondary">
          Technologies Related
        </Typography>
        <br />
        <Tags tags={technologyTags} />
        <br />
      </CardContent>
      <br />
      <Button variant="text" className={'bounce'} onClick={onToggleInformation}>
        {!expended ? (
          <KeyboardDoubleArrowDownOutlinedIcon />
        ) : (
          <KeyboardDoubleArrowUpOutlinedIcon />
        )}
      </Button>
      <br />
      <CardActions>
        <Button size="small">
          <ShareOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
