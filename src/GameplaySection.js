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
	        	1v1 Arena Tactics.<br/>Inspired by Chess, MOBAs and Card Battlers.<br/>Powered by collectible NFTs.
	        </Typography>
	        <br/>
	        <br/>
        	<Typography color="text.primary" variant="body2" align="center">
	        	&bull;  No hype  &bull;<br/>
	        	&bull;  No metaverse  &bull;<br/>
	        	&bull;  Just a good game  &bull;
	        </Typography>
		</Container>
	);
};

export default GameplaySection;