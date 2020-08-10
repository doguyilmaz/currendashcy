import React, { useContext } from 'react';
import { CurrencyStyled } from '../Constants/Dashboard';
import { AppContext } from '../Context/AppContext/AppProvider';
import CurrencyBox from './CurrencyBox';

const CurrencyGrid = () => {
	const { currencies, locale } = useContext(AppContext);

	return (
		<CurrencyStyled>
			{currencies.map((currency, idx) => (
				<CurrencyBox
					key={idx}
					currency={currency}
					index={idx}
					locale={locale}
				/>
			))}
		</CurrencyStyled>
	);
};

export default CurrencyGrid;
