import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';

import { lang } from '../Language/Lang';

const Welcome = ({ name }) => {
	const { firstVisit, locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return firstVisit ? (
		<div>{localeLang.welcomeMessage}</div>
	) : (
		<div>
			{localeLang.hello}, {name || localeLang.guest}...
		</div>
	);
};

export default Welcome;
