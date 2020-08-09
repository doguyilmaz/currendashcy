import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import CurrencyBox from './CurrencyBox';

const CurrencyStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

const CurrencyGrid = () => {
	const { currencies } = useContext(AppContext);

	return (
		<CurrencyStyled>
			{currencies.map((currency, idx) => (
				<CurrencyBox key={currency} currency={currency} index={idx} />
			))}
		</CurrencyStyled>
	);
};

export default CurrencyGrid;
