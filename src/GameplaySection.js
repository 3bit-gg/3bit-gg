import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const GameplaySection = () => {
	return (
		<Container 
			display="flex"
			direction="column"
			maxWidth={false}
			sx ={{
				bgcolor: 'background.paper',
				p: '50pt'
			}}>
			<Typography color="text.primary" variant='body1' align="center" gutterBottom>
	        	1v1 Tactics Arena.<br/>Inspired by Chess, MOBAs and Card Battlers.<br/>Launching for iOS/Android in 2022.
	        </Typography>
		</Container>
	);
};

export default GameplaySection;