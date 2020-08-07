import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import CoinTile from '../Layout/CoinTile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 14px;
	margin-top: 30px;
`;

const getCoinListToDisplay = (coinList) => {
	return Object.keys(coinList).slice(0, 100);
};

const CoinGrid = () => {
	const { coinList } = useContext(AppContext);

	return (
		<CoinGridStyled>
			{getCoinListToDisplay(coinList).map((coinKey) => (
				<CoinTile key={coinKey} coinKey={coinKey} />
			))}
		</CoinGridStyled>
	);
};

export default CoinGrid;
