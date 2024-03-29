import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu as MaterialMenu,
  MenuItem,
  Button
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { presentationRoutes } from '../routes';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu } from 'components/Menu';
import { ApolloCloudLogo } from 'layout/ApolloCloudLogo';

const StyledLink = styled(Link)(() => ({ textDecoration: 'none' }));

const paths = presentationRoutes.filter(({ path }) => path !== '/');

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const createSubMenuName = (name: string) =>
    name.substring(name.lastIndexOf('/') + 1);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              position: 'relative'
            }}
          >
            <ApolloCloudLogo />
          </Typography>

          <Link to="/">
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MaterialMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {paths.map(({ path, routes }) => (
                  <MenuItem key={path} onClick={handleCloseNavMenu}>
                    <StyledLink to={path}>
                      <Typography textAlign="center">
                        {routes ? createSubMenuName(path) : path.slice(1)}
                      </Typography>
                    </StyledLink>
                  </MenuItem>
                ))}
              </MaterialMenu>
            </Box>
          </Link>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {paths.map(({ path, routes }) =>
              routes ? (
                <Menu
                  name={createSubMenuName(path)}
                  key={path}
                  items={routes.map((route) => (
                    <StyledLink to={path + route.path} key={path + route.path}>
                      {route.Page
                        ? route.path.substring(1).replaceAll('-', ' ')
                        : ''}
                    </StyledLink>
                  ))}
                />
              ) : (
                <StyledLink to={path} key={path}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: { xs: 'block', md: 'block' }
                    }}
                  >
                    {path.slice(1).replaceAll('-', ' ')}
                  </Button>
                </StyledLink>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
