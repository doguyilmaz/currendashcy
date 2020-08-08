import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
	grid-gap: 14px;
	margin-top: 30px;
`;
const getCoinListToDisplay = (
	coinList,
	filteredCoins,
	favSection,
	favourites
) => {
	return favSection
		? favourites
		: filteredCoins && Object.keys(filteredCoins).length > 0
		? Object.keys(filteredCoins)
		: Object.keys(coinList).slice(0, 100);
};

const CoinGrid = ({ favSection }) => {
	const { coinList, filteredCoins, favourites } = useContext(AppContext);

	return (
		<CoinGridStyled>
			{getCoinListToDisplay(
				coinList,
				filteredCoins,
				favSection,
				favourites
			).map((coinKey) => (
				<CoinTile favSection={favSection} key={coinKey} coinKey={coinKey} />
			))}
		</CoinGridStyled>
	);
};

export default CoinGrid;
