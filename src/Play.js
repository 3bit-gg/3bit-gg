import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

const Play = () => {
	return (
		<Container 
			display="flex"
			direction="column"
			maxWidth={false}
			sx ={{
				minHeight: '85vh',
				bgcolor: 'background.default',
			}}>
			<Grid container
			  	alignItems="center"
			  	justifyContent="center"
				sx ={{
					minHeight: { xs: "80vh", sm: "85vh" },
					pt: { xs: "20pt", sm: "0" },
				}}>
		     	<Grid item 
		     		xs={8} sm={5} md={4} lg={3} 
		     		sx={{
			        	textAlign: 'center',
			        }}>
			        <Link style={{display: 'flex'}} to="/play">
			      		<Button sx={{my: 4, mx: 'auto', width:"70%"}} variant="outlined" color='white'>Download</Button>
			      	</Link>
		     	</Grid>
		     	
			</Grid>
		</Container>
	);
};

export default Play;