import React from 'react';
import { CoinImageStyled } from '../Constants/Dashboard';

const CoinImage = ({ coin, spotlight }) => {
	return (
		<CoinImageStyled
			alt={coin.CoinSymbol}
			spotlight={spotlight}
			src={`http://cryptocompare.com/${coin.ImageUrl}`}
		/>
	);
};

export default CoinImage;
