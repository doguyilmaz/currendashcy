import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../Context/AppContext/AppProvider';

const ConfirmButtonElem = styled.div`
	margin: 20px;
	padding: 10px;
	border-radius: 5px;
	color: black;
	background-color: green;
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		background-color: darkgreen;
		-webkit-box-shadow: 0px 0px 5px 1px darkgreen;
		-moz-box-shadow: 0px 0px 5px 1px darkgreen;
		box-shadow: 0px 0px 5px 1px darkgreen;
		color: lightgray;
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
