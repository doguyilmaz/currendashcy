import styled, { css } from 'styled-components';
import { SelectableTile } from '../Layout/Tile';
import {
	fontSize3,
	fontSizeBig,
	wheatBoxShadow,
	backgroundColor2,
	fontSize2,
} from './Styles';

export const RatePercentage = styled.div`
	justify-self: right;
	align-self: center;
	color: gray;
`;

export const RateArrow = styled(RatePercentage)`
	${fontSizeBig};
	color: darkgreen;

	${(props) =>
		props.status &&
		css`
			color: darkred;
		`}
`;

export const TickerCurrency = styled.div`
	${fontSizeBig};
	color: darkgreen;
	align-self: center;

	${(props) =>
		props.negative &&
		css`
			color: darkred;
		`}
`;

export const CurrencyTileStyled = styled(SelectableTile)`
	color: lightgray;
	align-self: center;
	${(props) =>
		props.compact &&
		css`
			${fontSize3}
		`}

	${(props) =>
		props.currentFav &&
		css`
			${wheatBoxShadow};
			pointer-events: none;
		`}
`;

export const CurrencyStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

export const ChartGrid = styled.div`
	display: grid;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
	margin-top: 20px;
`;

export const SpotlightName = styled.h2`
	text-align: center;
`;

export const CoinImageStyled = styled.img`
	// display: block;
	// margin: auto;
	height: 60px;

	${(props) =>
		props.spotlight &&
		css`
			height: 200px;
		`};
`;

export const SelectStyled = styled.select`
	background-color: black;
	color: wheat;
	${fontSize2};
	margin: 5px;
  padding: 2px;
  border: 1px solid
  border-radius: 5px;
  float: right;
  outline: none;
`;
