import React, { useContext } from 'react';
import { CoinHeaderGridStyled } from '../Layout/CoinHeaderGrid';
import {
	RatePercentage,
	RateArrow,
	TickerCurrency,
	CurrencyTileStyled,
} from '../Constants/Dashboard';
import { AppContext } from '../Context/AppContext/AppProvider';

const toFixCustom = (currency) => {
	return +(currency + '').slice(0, 7);
};

const CurrencyTile = ({ symbol, data, compact }) => {
	const { currentFav, setCurrentFav, locale } = useContext(AppContext);

	const { PRICE: price, CHANGEPCT24HOUR: change24 } = data;
	return (
		<CurrencyTileStyled
			compact={compact}
			currentFav={currentFav === symbol}
			onClick={() => setCurrentFav(symbol)}
		>
			<CoinHeaderGridStyled>
				<div>{symbol} </div>
				<RatePercentage>{toFixCustom(change24)}% </RatePercentage>
				<TickerCurrency negative={change24 < 0}>
					{locale === 'en' ? '$' : 'TL'}
					{toFixCustom(price)}
				</TickerCurrency>
				<RateArrow status={change24 < 0}>{change24 < 0 ? '⬇' : '⬆'}</RateArrow>
			</CoinHeaderGridStyled>
		</CurrencyTileStyled>
	);
};

const CurrencyBox = ({ currency, index, locale }) => {
	const symbol = Object.keys(currency)[0];
	const data = currency[symbol][`${locale === 'en' ? 'USD' : 'TRY'}`];
	return <CurrencyTile compact={index >= 5} symbol={symbol} data={data} />;
};

export default CurrencyBox;
