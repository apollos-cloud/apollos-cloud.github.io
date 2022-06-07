import styled from '@emotion/styled';
import { Menu as MaterialMenu, Button, MenuItem } from '@mui/material';
import { FC, useState, MouseEvent, ReactNode } from 'react';

const StyledButton = styled(Button)(() => ({ color: 'inherit' }));

export interface MenuProps {
  name: string;
  items: ReactNode[];
}

export const Menu: FC<MenuProps> = ({ name, items }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {name}
      </StyledButton>
      <MaterialMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
      >
        {items.map((item) => (
          <MenuItem
            key={`${name}-${Math.random() * Math.pow(10, 10)}`}
            onClick={handleClose}
          >
            {item}
          </MenuItem>
        ))}
      </MaterialMenu>
    </>
  );
};
