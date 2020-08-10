import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/AppContext/AppProvider';
import { fontSize1, wheatBoxShadow, color3 } from '../Constants/Styles';

import { lang } from '../Language/Lang';

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
	const { confirmFav, locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return (
		<CenteredDiv>
			<ConfirmButtonElem onClick={confirmFav}>
				{localeLang.confirmFavourites}
			</ConfirmButtonElem>
		</CenteredDiv>
	);
};

export default ConfirmButton;
