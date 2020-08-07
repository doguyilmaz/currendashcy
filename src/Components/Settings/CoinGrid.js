import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../Context/AppContext/AppProvider';

export const CoinGridStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => {
	const { coinList } = useContext(AppContext);

	return (
		<CoinGridStyled>
			{Object.keys(coinList).map((coinKey) => (
				<div key={coinKey}>{coinKey}</div>
			))}
		</CoinGridStyled>
	);
};

export default CoinGrid;
