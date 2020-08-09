import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import { fontSize1, wheatBoxShadow, color3 } from '../Constants/Styles';

const ConfirmButtonElem = styled.div`
	margin: 20px;
	padding: 10px;
	border-radius: 5px;
	color: ${color3};
	${fontSize1};
	background-color: green;
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		background-color: darkgreen;
		color: lightgray;
		${wheatBoxShadow}
	}
`;

export const CenteredDiv = styled.div`
	display: grid;
	justify-content: center;
`;

const ConfirmButton = () => {
	const { confirmFav } = useContext(AppContext);

	return (
		<CenteredDiv>
			<ConfirmButtonElem onClick={confirmFav}>
				Confirm Favourites
			</ConfirmButtonElem>
		</CenteredDiv>
	);
};

export default ConfirmButton;
