import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';
import { SelectableTile, RemovableTile, DisabledTile } from '../Layout/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const clickCoinHandler = (favSection, coinKey, addCoin, removeCoin) => {
	return favSection
		? () => {
				removeCoin(coinKey);
		  }
		: () => {
				addCoin(coinKey);
		  };
};

const CoinTile = ({ coinKey, favSection }) => {
	const { coinList, addCoin, removeCoin, isFavourited } = useContext(
		AppContext
	);
	const coin = coinList[coinKey];

	// let TileType = SelectableTile;
	// if (favSection) TileType = RemovableTile;
	// else if (isFavourited(coinKey)) TileType = DisabledTile;

	let TileType = favSection
		? RemovableTile
		: isFavourited(coinKey)
		? DisabledTile
		: SelectableTile;

	return (
		<TileType
			onClick={clickCoinHandler(favSection, coinKey, addCoin, removeCoin)}
		>
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
