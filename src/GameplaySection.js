import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardMedia from '@mui/material/CardMedia';

const GameplaySection = () => {
	return (
		<Container 
			display="flex"
			direction="column"
			justifyContent="center"
			maxWidth={false}
			sx ={{
				bgcolor: 'background.paper',
				p: '50pt'
			}}>
			<Typography color="text.primary" variant='body1' align="center" gutterBottom>
	        	1v1 Arena Tactics.<br/>Inspired by Chess, MOBAs and Card Battlers.<br/>Powered by collectible NFTs.
	        </Typography>
	        <br/>
	        <br/>
        	<Typography color="text.primary" variant="body2" align="center">
	        	&bull;  No metaverse  &bull;<br/>
	        	&bull;  No hype  &bull;<br/>
	        	&bull;  Just a good game  &bull;
	        </Typography>
		</Container>
	);
};

export default GameplaySection;