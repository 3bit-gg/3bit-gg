import * as React from 'react';
import Box from '@mui/material/Box'

const MoveInfo = ({bit}) => {
	return (
		<Box sx={{
			ml: '10pt',
			mr: '10pt',
			mb: '5pt',
			p: '10pt',
			borderRadius: '5pt',
			backgroundColor: 'card.abilityInfoBackground',
			fontSize: 15,
		}}>
			<Box sx={{position:'absolute', fontWeight: '600'}}>
				Move [{bit.MoveDistance}]
			</Box>
			<Box sx={{width:'100%', textAlign: 'right', fontWeight: '600', color: 'card.energy'}}>
				{bit.MoveCost}
			</Box>
		</Box>
	);
};

export default MoveInfo;