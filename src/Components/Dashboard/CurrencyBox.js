import React from 'react';
import { CoinHeaderGridStyled } from '../Layout/CoinHeaderGrid';
import {
	RatePercentage,
	RateArrow,
	TickerCurrency,
	CurrencyTileStyled,
} from '../Constants/Dashboard';

const toFixCustom = (currency) => {
	return +(currency + '').slice(0, 7);
};

const CurrencyTile = ({ symbol, data, compact }) => {
	const { PRICE: price, CHANGEPCT24HOUR: change24 } = data;
	return (
		<CurrencyTileStyled compact={compact}>
			<CoinHeaderGridStyled>
				<div>{symbol} </div>
				<RatePercentage>{toFixCustom(change24)} </RatePercentage>
				<TickerCurrency negative={change24 < 0}>
					{toFixCustom(price)}
				</TickerCurrency>
				<RateArrow status={change24 < 0}>{change24 < 0 ? '⬇' : '⬆'}</RateArrow>
			</CoinHeaderGridStyled>
		</CurrencyTileStyled>
	);
};

const CurrencyBox = ({ currency, index }) => {
	const symbol = Object.keys(currency)[0];
	const data = currency[symbol]['USD'];
	return <CurrencyTile compact={index >= 5} symbol={symbol} data={data} />;
};

export default CurrencyBox;
