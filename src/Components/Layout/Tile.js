import styled from 'styled-components';
import {
	subtleBoxShadow,
	lightBlueBackground,
	wheatBoxShadow,
	redBoxShadow,
} from '../Constants/Styles';

export const Tile = styled.div`
	${subtleBoxShadow};
	${lightBlueBackground};
	padding: 10px;
`;

export const SpotlightTile = styled(Tile)`
	text-align: center;
	display: grid;
	grid-template-rows: auto 1fr;
	justify-content: center;
	align-items: center;
`;

export const SelectableTile = styled(Tile)`
	&:hover {
		cursor: pointer;
		${wheatBoxShadow}
	}
`;

export const RemovableTile = styled(SelectableTile)`
	&:hover {
		${redBoxShadow}
	}
`;

export const DisabledTile = styled(Tile)`
	pointer-events: none;
	opacity: 0.5;
`;

export const HistoricalLoadingStyled = styled.div`
	height: 420px;
	width: 988px;
	display: grid;
	align-items: center;
	justify-content: center;
`;
