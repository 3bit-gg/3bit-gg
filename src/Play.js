import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

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
		     		sx={{
			        	textAlign: 'center',
			        	width: '75%'
			        }}>
			        <Stack>
						<Typography color="text.primary" variant='h6' align="center" gutterBottom sx={{p: '20pt'}}>
				        	3Bit Tactics is currently in development.
				        	<br/>
				        	Launching 2022.
				        </Typography>
				        <Typography color="text.primary" variant='body2' align="center" gutterBottom>
				        	We are approaching our first closed alpha test.
				        	<br/>
				        	Please follow our <a href="https://twitter.com/3bitgg" target="_blank" rel="noreferrer"><u>Twitter</u></a> for updates!
				        </Typography>
				       {/*  <Link style={{display: 'flex'}} to="/play"> */}
				      	{/* 	<Button sx={{my: 4, mx: 'auto', width:"70%"}} variant="outlined" color='white'>Download</Button> */}
				      	{/* </Link> */}
					</Stack>
		     	</Grid>
			</Grid>
		</Container>
	);
};

export default Play;