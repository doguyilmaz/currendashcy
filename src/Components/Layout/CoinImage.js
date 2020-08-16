import React from 'react';
import { CoinImageStyled } from '../Constants/Dashboard';

const CoinImage = ({ coin, spotlight }) => {
	return (
		<CoinImageStyled
			alt={coin ? coin.CoinSymbol : `e`}
			spotlight={spotlight}
			src={`http://cryptocompare.com/${coin && coin.ImageUrl}`}
		/>
	);
};

export default CoinImage;
