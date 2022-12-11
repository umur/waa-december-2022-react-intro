import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import routes from './routes'
import { NavLink, useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { isLoggedIn, logout } from '../utils/auth';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

// const renderDrawer = routes.map(({type, name, key, icon, route, component}) => {

// });

function WaaAppBar(props) {
  const navigate = useNavigate();
  let loggedIn = isLoggedIn();
  let myRoutes = loggedIn ? routes.privateRoutes : routes.publicRoutes;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [auth, setAuth] = React.useState(loggedIn);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleChange = () => {
  //   setAuth(loggedIn);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    logout();
    handleClose();
    // handleChange();
    navigate('/');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const menu = (
    loggedIn ?
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </Menu>
      </div>
      : <></>
  );

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WAA React
      </Typography>
      <Divider />
      <List>
        {myRoutes.map(({ name, route, key, type }) =>

          type !== 'hidden' ? <NavLink
            key={key}
            to={route}
          >
            <ListItem key={name} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          </NavLink> : null
        )}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            WAA React December
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {myRoutes.map(({ name, route, key, type }) =>
              type !== 'hidden' ?
                <NavLink key={key} to={route}>
                  <Button key={key} sx={{ color: '#fff' }}>
                    {name}
                  </Button>
                </NavLink>
                : null
            )}
          </Box>
          {menu}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

WaaAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * No need in waa project.
   */
  window: PropTypes.func,
};

export default WaaAppBar;