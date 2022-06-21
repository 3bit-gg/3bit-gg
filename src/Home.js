import * as React from 'react';
import HeroSection from './HeroSection';
import GameplaySection from './GameplaySection';
import GameplayVideoSection from './GameplayVideoSection';

const Home = () => {
	return (
		<div>
			<HeroSection/>
	        <GameplaySection/>
	        <GameplayVideoSection/>
	    </div>
	);
};

export default Home;