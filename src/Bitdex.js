import * as React from 'react';
import BitCard from './BitCard'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

const bits = ['BombDog', 'Cocoda', 'Draka', 'Frigidon', 'Gyrobee', 'Marshal', 'Rotobot', 'Syphos', 'Protoscope', 'Ignamus', 'Iggy', 'Null', 'Doodeloon', 'Timmy'];

const Bitdex = () => {
	return (
	 	<Container sx={{ p: '0', pt: 10 }} maxWidth='lg'>
		 	<Grid container spacing={2} justifyContent="center" alignItems="center">
            	{bits.map((bit) => (
      				<BitCard key={bit} bit={require('./assets/gameData/UnitDatas/'+bit+'.json')}/>
	            ))}
          	</Grid>
		</Container>
	);
};

export default Bitdex;