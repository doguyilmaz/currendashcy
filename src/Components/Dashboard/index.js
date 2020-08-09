import React from 'react';

import Page from '../Layout/Page';
import CurrencyGrid from './CurrencyGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from '../Constants/Dashboard';
import CurrencyChart from './CurrencyChart';

const index = () => {
	return (
		<Page name='dashboard'>
			<CurrencyGrid />
			<ChartGrid>
				<CoinSpotlight />
				<CurrencyChart />
			</ChartGrid>
		</Page>
	);
};

export default index;
