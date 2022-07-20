import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

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
			  {/*       <Stack> */}
					{/* 	<Typography color="text.primary" variant='h6' align="center" gutterBottom sx={{p: '20pt'}}> */}
				 {/*        	3Bit Tactics is currently in development. */}
				 {/*        	<br/> */}
				 {/*        	Launching 2022. */}
				 {/*        </Typography> */}
				 {/*        <Typography color="text.primary" variant='body2' align="center" gutterBottom> */}
				 {/*        	We are approaching our first closed alpha test. */}
				 {/*        	<br/> */}
				 {/*        	Please follow our <a href="https://twitter.com/3bitgg" target="_blank" rel="noreferrer"><u>Twitter</u></a> for updates! */}
				 {/*        </Typography> */}
					{/* </Stack> */}
					<Stack>
						<Typography color="text.primary" variant='h6' align="center" gutterBottom sx={{p: '20pt'}}>
				        	3Bit Tactics is currently in alpha testing.
				        	<br/>
				        	Launching 2022.
				        </Typography>
				        <Typography color="text.primary" variant='body2' align="center" gutterBottom>
				        	Download the alpha build below!
				        	<br/>
				        	We will have limited time windows for online play that will be announced via our  <a href="https://twitter.com/3bitgg" target="_blank" rel="noreferrer"><u>Twitter</u></a>, though offline bot games are always available.
				        </Typography>
				        <a href={require('./downloads/3Bit_0.0.0.zip')} download="3Bit_0.0.0.zip">
		        			<Button sx={{my: 4, mx: 'auto', width:"70%", maxWidth: "300px"}} variant="outlined" color='white'>Windows v0.0.0</Button>
			        	</a>
					</Stack>
		     	</Grid>
			</Grid>
		</Container>
	);
};

export default Play;