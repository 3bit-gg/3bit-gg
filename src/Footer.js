import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        3bit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
	return (
		<Box sx={{ p: 6, backgroundColor:'background.paper' }} component="footer">
	       {/* <Typography variant="h6" align="center" gutterBottom>
	          Footer
	        </Typography>*/}
	        <Typography
	          variant="subtitle1"
	          align="center"
	          color="text.secondary"
	          component="p"
	        >
	          
	        </Typography>
	        <Copyright />
	      </Box>
	);
};

export default Footer;