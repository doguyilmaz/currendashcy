import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';
import { SelectableTile, RemovableTile, DisabledTile } from '../Layout/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const CoinTile = ({ coinKey, favSection }) => {
	const { coinList } = useContext(AppContext);
	const coin = coinList[coinKey];

	let TileType = favSection ? RemovableTile : SelectableTile;

	return (
		<TileType>
			<CoinHeaderGrid
				favSection={favSection}
				name={coin.CoinName}
				symbol={coin.Symbol}
			/>
			<CoinImage coin={coin} />
		</TileType>
	);
};

export default CoinTile;
