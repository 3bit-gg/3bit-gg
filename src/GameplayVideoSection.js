import * as React from 'react';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

const GameplayVideoSection = () => {
	return (
		<Container 
			display="flex"
			direction="column"
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
			  	width: {xs:'80%', sm:'40%', md: '20%'},
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