import styled, { css } from 'styled-components';
import { SelectableTile } from '../Layout/Tile';
import { fontSize3, fontSizeBig } from './Styles';

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
`;
