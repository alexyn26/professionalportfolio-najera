import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {setPageState} from '../../App'


import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';






function ResponsiveAppBar({pageState, setPageState})  {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenAbout = () => {
    setPageState({...pageState, About:true, Portfolio:false, Contact:false, Resume:false})
  }
  const handleOpenContact = () => {
    setPageState({...pageState, About:false, Portfolio:false, Contact:true, Resume:false})
  }
  const handleOpenPortfolio = () => {
    setPageState({...pageState, About:false, Portfolio:true, Contact:false, Resume:false})
  }
  const handleOpenResume = () => {
    setPageState({...pageState, About:false, Portfolio:false, Contact:false, Resume:true})
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Alex Najera
          </Typography>

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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'arial',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Alex Najera
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MenuItem  onClick  = {handleOpenAbout}>
            <Typography textAlign = "center"> About</Typography></MenuItem>
            <MenuItem  onClick  = {handleOpenContact}>
            <Typography textAlign = "center"> Contact Me</Typography></MenuItem>
            <MenuItem  onClick  = {handleOpenPortfolio}>
            <Typography textAlign = "center"> Portfolio</Typography></MenuItem>
            <MenuItem  onClick  = {handleOpenResume}>
            <Typography textAlign = "center"> Resume</Typography></MenuItem>
          </Box>

          
         
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;