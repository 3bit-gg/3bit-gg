import * as React from 'react';
import MoveInfo from './MoveInfo'
import AbilityInfo from './AbilityInfo'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const BitCard = ({bit}) => {
	return (
		<Grid item key={bit} xs={11} sm={6} md={4} lg={3} xl={3}>
			<Card sx={{ 
				height: '100%', 
				position: 'relative',
				display: 'flex', 
				flexDirection: 'column', 
				backgroundColor: 'card.background', 
				borderRadius: '15pt',
				boxShadow: 5
				 }}>
			 	<Box sx={{ 
			 		position: 'absolute',
			 		backgroundColor: 'card.background',
			 		p: '5pt',
			 		pl: '20pt',
			 		pr: '15pt',
			 		borderRadius: '25pt 0 10pt 0',
			 	}}>
	                <Typography variant='body1' sx={{
	                	fontWeight: '600'
	                }}>
	                  {bit.UnitName}
	                </Typography>
              	</Box>
              	<Box sx={{ 
			 		position: 'absolute',
			 		right:0,
			 		backgroundColor: 'card.background',
			 		p: '5pt',
			 		pl: '10pt',
			 		pr: '15pt',
			 		borderRadius: '0 25pt 0 10pt'
			 	}}>
	                <Typography variant='body1' sx={{
	                	fontWeight: '800',
	                	color: 'card.health'
	                }}>
	                  {bit.MaxHealth}
	                </Typography>
              	</Box>
              	 <CardMedia
	                  component="img"
	                  sx={{
	                    m: '10pt',
	                    mb: '6pt',
	                    width: 'calc(100% - 20pt)',
	                    minHeight: '100pt',
	                    background: 'rgba(0,0,0,0.5)',
	                    borderRadius: '5pt',
	                  }}
	                  image={require('./assets/png/bits/' + bit.UnitID + '.png')}
	                  alt={bit}
              	/>
              	
              	<Box sx={{ flexGrow: 1, mb: 1 }}>
              		<MoveInfo bit={bit}/>
	                <AbilityInfo ability={require('./assets/gameData/AbilityDatas/'+bit.AbilityIDs[0]+'.json')}/>
	                <AbilityInfo ability={require('./assets/gameData/AbilityDatas/'+bit.AbilityIDs[1]+'.json')}/>
              	</Box>
            </Card>
		</Grid>
	);
};

export default BitCard;