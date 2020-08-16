import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { mainTone, gray, blue, shadow } from '../Constants/Styles';
import { AppContext } from '../Context/AppContext/AppProvider';

import { lang } from '../Language/Lang';

const Logo = styled.div`
	font-size: 1.5rem;
`;

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px 70px 50px 50px;
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
    
  ${(props) =>
		props.hidden &&
		css`
			display: none;
		`}
    
    ${(props) =>
			props.logO &&
			css`
				display: none;
			`}
`;

const ControlButton = ({ name, lang = false, theme = false, logoutProp }) => {
	const {
		page,
		setPage,
		setLocale,
		setTheme,
		firstVisit,
		locale,
		logout,
	} = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return (
		<ControlButtonElem
			active={page === name}
			hidden={firstVisit && name === (locale === 'en' ? 'dashboard' : 'panel')}
			logO={!firstVisit && (name === 'Çıkış' || name === 'Logout')}
			onClick={() => {
				if (logoutProp) {
					logout();
				} else {
					!lang && !theme ? setPage(name) : !lang ? setTheme() : setLocale();
				}
			}}
		>
			{uppercase(name)}
		</ControlButtonElem>
	);
};

const AppBar = () => {
	const { locale, theme } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return (
		<Bar>
			<Logo>CurrenDashcy</Logo>
			<div />
			<ControlButton active name={localeLang.dashboard} />
			<ControlButton name={localeLang.settings} />
			<ControlButton
				theme={theme}
				name={theme === 'light' ? localeLang.light : localeLang.dark}
			/>
			<ControlButton lang name={locale} />
			<ControlButton logoutProp name={localeLang.logout} />
		</Bar>
	);
};

const uppercase = ([firstLetter, ...rest]) => {
	return firstLetter.toUpperCase() + rest.join('').toLowerCase();
};

export default AppBar;
