import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import { Tile, SelectableTile } from '../Layout/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

const CoinTile = ({ coinKey }) => {
	const { coinList } = useContext(AppContext);
	const coin = coinList[coinKey];

	return (
		<SelectableTile>
			<CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
			<CoinImage coin={coin} />
		</SelectableTile>
	);
};

export default CoinTile;
