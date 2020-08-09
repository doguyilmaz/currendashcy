import React, { useContext } from 'react';
import { Tile } from '../Layout/Tile';
import { SpotlightName } from '../Constants/Dashboard';
import { AppContext } from '../Context/AppContext/AppProvider';
import CoinImage from '../Layout/CoinImage';

const CoinSpotlight = () => {
	const { currentFav, coinList } = useContext(AppContext);

	return (
		<Tile>
			<SpotlightName>{coinList[currentFav].CoinName}</SpotlightName>
			<CoinImage spotlight coin={coinList[currentFav]} />
		</Tile>
	);
};

export default CoinSpotlight;
