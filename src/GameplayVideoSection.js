import * as React from 'react';
import Container from '@mui/material/Container';
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
			  muted
			  autoPlay
			  loop 
			  src={require('./assets/video/Gameplay_1.mp4')} 
			  sx ={{
			  	width: {xs:'100%', sm:'80%', md: '50%'},
			  	height: '100%',
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