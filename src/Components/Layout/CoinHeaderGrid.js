import React from 'react';
import styled from 'styled-components';
import { RemovableTile } from './Tile';

export const CoinHeaderGridStyled = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
	justify-self: right;
`;

export const DeleteIcon = styled.div`
	justify-self: right;
	display: none;
	${RemovableTile}:hover & {
		display: block;
		color: red;
	}
`;

export const CoinName = styled.div`
	text-align: center;
	margin: auto;
`;

const CoinHeaderGrid = ({ name, symbol, favSection }) => {
	return (
		<CoinHeaderGridStyled>
			<CoinName>{name}</CoinName>
			{favSection ? (
				<DeleteIcon>X</DeleteIcon>
			) : (
				<CoinSymbol>{symbol} </CoinSymbol>
			)}
		</CoinHeaderGridStyled>
	);
};

export default CoinHeaderGrid;
