import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HeroSection = () => {
	return (
		<Container 
			display="flex"
			direction="column"
			justifyContent="center"
			maxWidth={false}
			sx ={{
				minHeight: 'calc(100vh - 50pt)',
				bgcolor: 'background.default',
				backgroundImage: `url(${require('./assets/png/title_background.png')})`,
	            backgroundSize: "cover",
	            backgroundPosition: "center center",
			}}>
			<Grid container
			  	alignItems="center"
			  	justifyContent="center"
				sx ={{
					minHeight: { xs: "0", sm: "calc(100vh - 50pt)" },
					pt: { xs: "20pt", sm: "0" },
				}}>

		     	<Grid item 
					xs={6} sm={4} md={3} lg={2} 
					order={{ xs: 2, sm: 1 }}
					sx={{
						pt: { xs: "0", sm: "50pt" },
					}}>
			        <Stack>
						<Box
					        component="img"
					        sx={{
				        		width: '100%',
					        }}
					        alt="3bit"
					        src={require('./assets/png/3bit_tactics.png')} 
				      	/>
				      	<Button sx={{my: 4, mx: 'auto', width:"70%"}} variant="outlined" color='white'>Play</Button>
					</Stack>
		     	</Grid>
		     	<Grid item 
		     		xs={10} sm={5} md={4} lg={3} 
		     		order={{ xs: 1, sm: 2 }}
		     		sx={{
			        	textAlign: 'center',
			        }}>
			        <Box
				        component="img"
				        sx={{
				        	width: '100%',
				        }}
				        alt="3bit"
				        src={require('./assets/png/title_bits.png')} 
				    />
		     	</Grid>
		     	
			</Grid>
			<ArrowDropDownIcon color="white" sx={{ 
	        	fontSize: 50,
	        	width: "100pt",
	        	position: "absolute",
	        	left: "calc(50vw - 50pt)",
	        	bottom: "10pt"
	        }} />
		</Container>
	);
};

export default HeroSection;