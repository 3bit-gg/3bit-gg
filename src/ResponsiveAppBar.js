import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faPlay, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

const pages = [
  {
    'title':'Twitter',
    'link': 'https://twitter.com/3bitgg',
    'icon': <FontAwesomeIcon icon={faTwitter} style={{'marginRight': "5px"}} />,
    'external': true
  }, 
  {
    'title':'Discord',
    'link': 'https://discord.gg/9dnsm3H2nt',
    'icon': <FontAwesomeIcon icon={faDiscord} style={{'marginRight': "5px"}} />,
    'external': true
  }, 
  // {
  //   'title':'Bitdex',
  //   'link': 'bitdex',
  //   'icon': <FontAwesomeIcon icon={faLayerGroup} style={{'marginRight': "5px"}}/>,
  //   'external': false
  // },
  {
    'title':'Play',
    'link': 'play',
    'icon': <FontAwesomeIcon icon={faPlay} style={{'marginRight': "5px"}} />,
    'external': false
  }, 
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const buttonElement= (page) => {
    return <Button
      onClick={handleCloseNavMenu}
      color="light"
      variant="contained" 
      sx={{ 
        my: 2, 
        display: 'block', 
        margin: '3px', 
        fontWeight:'600',
        boxShadow: 0,
        "&.MuiButtonBase-root:hover": {
          boxShadow: 0,
        } 
      }}>
      {page.icon} {page.title}
    </Button>;
  }

  const listElement= (page) => {
    return <MenuItem 
      onClick={handleCloseNavMenu} 
      sx={{
        pl: '30pt',
        pr: '30pt',
      }}>
      <Typography textAlign="center">{page.icon} {page.title}</Typography>
    </MenuItem>;
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: '25pt'
              }}
              alt="3bit"
              src={require('./assets/png/3bit_sans_tactics.png')}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }} justifyContent="flex-end">
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
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map((page) => (
                <div key={page.title}>
                  {page.external 
                    ? <a key={page.title} href={page.link} target="_blank" rel="noreferrer"> {listElement(page)} </a>
                    : <Link key={page.title} to={page.link}> {listElement(page)} </Link>
                  }

                </div>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }} justifyContent="flex-end">
            {pages.map((page) => (
              <div key={page.title}>
                {page.external 
                  ? <a key={page.title} href={page.link} target="_blank" rel="noreferrer"> {buttonElement(page)} </a>
                  : <Link key={page.title} to={page.link}> {buttonElement(page)} </Link>
                }
              </div>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
