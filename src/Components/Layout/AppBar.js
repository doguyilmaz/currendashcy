import React from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from '../Context/AppProvider';

const Logo = styled.div`
	font-size: 1.5rem;
`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px;
	color: gray;
	margin-bottom: 30px;
`;

const ControlButtonElem = styled.div`
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		color: lightblue;
		text-shadow: 0px 0px 25px lightblue;
	}

	${(props) =>
		props.active &&
		css`
			color: wheat;
			text-shadow: 0px 0px 25px yellow;

			&:hover {
				color: wheat;
				text-shadow: 0px 0px 25px yellow;
			}
		`}
`;

const ControlButton = ({ name }) => {
	return (
		<AppContext.Consumer>
			{({ page, setPage }) => (
				<ControlButtonElem active={page === name} onClick={() => setPage(name)}>
					{uppercase(name)}
				</ControlButtonElem>
			)}
		</AppContext.Consumer>
	);
};

const AppBar = () => {
	return (
		<Bar>
			<Logo>CurrenDashcy</Logo>
			<div />
			<ControlButton active name='dashboard' />
			<ControlButton name='settings' />
		</Bar>
	);
};

const uppercase = ([firstLetter, ...rest]) => {
	return firstLetter.toUpperCase() + rest.join('').toLowerCase();
};

export default AppBar;
