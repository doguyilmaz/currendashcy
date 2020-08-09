import React, { useContext } from 'react';
import { CurrencyStyled } from '../Constants/Dashboard';
import { AppContext } from '../Context/AppContext/AppProvider';
import CurrencyBox from './CurrencyBox';

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
