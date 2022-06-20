import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardMedia from '@mui/material/CardMedia';

const GameplayVideoSection = () => {
	return (
		<Container 
			display="flex"
			direction="column"
			justifyContent="center"
			maxWidth={false}
			sx ={{
				bgcolor: 'background.paper',
				pb: '50pt'
			}}>
	        <CardMedia
			  component="video" 
			  controls 
			  src={require('./assets/video/Gameplay_1.mp4')} 
			  sx ={{
			  	width: {xs:'100%', sm:'80%', md: '50%'},
			  	borderRadius: '10pt',
			  	border: 5,
			  	borderColor: 'background.default',
			  	m: 'auto'
			  }}
			/>
		</Container>
	);
};

export default GameplayVideoSection;