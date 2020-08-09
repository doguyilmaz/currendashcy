import styled from 'styled-components';
import {
	subtleBoxShadow,
	lightBlueBackground,
	wheatBoxShadow,
	redBoxShadow,
} from '../Constants/Styles';

export const Tile = styled.div`
	${subtleBoxShadow}
	${lightBlueBackground}
padding: 10px;
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
