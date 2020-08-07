import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import { Tile, SelectableTile } from '../Layout/Tile';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 14px;
`;

const CoinGrid = () => {
	const { coinList } = useContext(AppContext);

	return (
		<CoinGridStyled>
			{Object.keys(coinList).map((coinKey) => (
				<SelectableTile key={coinKey}>{coinKey}</SelectableTile>
			))}
		</CoinGridStyled>
	);
};

export default CoinGrid;
