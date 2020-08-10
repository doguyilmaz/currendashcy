import React, { useContext } from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Layout/Page';
import CoinGrid from '../Layout/CoinGrid';
import Search from '../Layout/Search';

import { AppContext } from '../Context/AppContext/AppProvider';

import { lang } from '../Language/Lang';

const Settings = () => {
	const { locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return (
		<Page name={localeLang.settings}>
			<Welcome />
			<CoinGrid favSection />
			<ConfirmButton />
			<Search />
			<CoinGrid />
		</Page>
	);
};

export default Settings;
