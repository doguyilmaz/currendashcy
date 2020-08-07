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

const getCoinListToDisplay = (coinList, favSection) => {
	return Object.keys(coinList).slice(0, favSection ? 10 : 100);
};

const CoinGrid = ({ favSection }) => {
	const { coinList } = useContext(AppContext);

	return (
		<CoinGridStyled>
			{getCoinListToDisplay(coinList, favSection).map((coinKey) => (
				<CoinTile favSection={favSection} key={coinKey} coinKey={coinKey} />
			))}
		</CoinGridStyled>
	);
};

export default CoinGrid;
