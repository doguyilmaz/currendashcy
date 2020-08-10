import React, { useContext } from 'react';

import Page from '../Layout/Page';
import CurrencyGrid from './CurrencyGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from '../Constants/Dashboard';
import CurrencyChart from './CurrencyChart';

import { AppContext } from '../Context/AppContext/AppProvider';

import { lang } from '../Language/Lang';

const Dashboard = () => {
	const { locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	return (
		<Page name={localeLang.dashboard}>
			<CurrencyGrid />
			<ChartGrid>
				<CoinSpotlight />
				<CurrencyChart />
			</ChartGrid>
		</Page>
	);
};

export default Dashboard;
