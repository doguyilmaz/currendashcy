import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';

import { lang } from '../Language/Lang';

const Content = ({ children }) => {
	const { coinList, currencies, firstVisit, locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	if (!coinList) {
		return <div>{localeLang.loadingCoins}</div>;
	}

	// LATER: loading for added currencies later
	if (!firstVisit && !currencies) {
		return <div>{localeLang.loadingCurrencies}</div>;
	}

	return <div>{children}</div>;
};

export default Content;
