import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { mainTone, gray, blue, shadow } from '../Constants/Styles';
import { AppContext } from '../Context/AppContext/AppProvider';

const Logo = styled.div`
	font-size: 1.5rem;
`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px 70px 50px;
	color: ${gray};
	margin-bottom: 30px;
	text-align: center;
`;

const ControlButtonElem = styled.div`
	cursor: pointer;
	transition: 0.2s all;

	&:hover {
		color: ${blue};
		text-shadow: 0px 0px 25px ${blue};
	}

	${(props) =>
		props.active &&
		css`
			color: ${mainTone};
			text-shadow: 0px 0px 25px ${shadow};

			&:hover {
				color: ${mainTone};
				text-shadow: 0px 0px 25px ${shadow};
			}
		`}
  $${(props) =>
		props.hidden &&
		css`
			display: none;
		`}
`;

const ControlButton = ({ name, lang = false, theme = false }) => {
	const { page, setPage, setLocale, setTheme, firstVisit } = useContext(
		AppContext
	);
	return (
		<ControlButtonElem
			active={page === name}
			hidden={firstVisit && name === 'dashboard'}
			onClick={() => {
				!lang && !theme ? setPage(name) : !lang ? setTheme() : setLocale();
			}}
		>
			{uppercase(name)}
		</ControlButtonElem>
	);
};

const AppBar = () => {
	const { locale, theme } = useContext(AppContext);

	return (
		<Bar>
			<Logo>CurrenDashcy</Logo>
			<div />
			<ControlButton active name='dashboard' />
			<ControlButton name='settings' />
			<ControlButton theme name={theme} />
			<ControlButton lang name={locale} />
		</Bar>
	);
};

const uppercase = ([firstLetter, ...rest]) => {
	return firstLetter.toUpperCase() + rest.join('').toLowerCase();
};

export default AppBar;
