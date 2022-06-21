import * as React from 'react';
import Box from '@mui/material/Box'

function GetAbilityDescription(abilityDescriptionRaw)
{
	return abilityDescriptionRaw.replace('<color=#fff>', '').replace('</color>', '');
}

const AbilityInfo = ({ability}) => {
	return (
		<Box sx={{
			position: 'relative',
			ml: '10pt',
			mr: '10pt',
			mb: '5pt',
			p: '10pt',
			borderRadius: '5pt',
			backgroundColor: 'card.abilityInfoBackground',
			fontSize: 15,
		}}>
			<Box sx={{position:'absolute', fontWeight: '600'}}>
				{ability.AbilityName}
			</Box>
			<Box sx={{width:'100%', textAlign: 'right', pb:'5pt', fontWeight: '600', color: 'card.energy'}}>
				{ability.EnergyCost}
			</Box>
			<Box sx={{color:'card.abilityInfoDescriptionText'}}>
				{GetAbilityDescription(ability.AbilityDescription)}
			</Box>
		</Box>
	);
};

export default AbilityInfo;