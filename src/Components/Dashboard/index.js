import React from 'react';

import Page from '../Layout/Page';
import CurrencyGrid from './CurrencyGrid';
import CoinSpotlight from './CoinSpotlight';
import { ChartGrid } from '../Constants/Dashboard';

const index = () => {
	return (
		<Page name='dashboard'>
			<CurrencyGrid />
			<ChartGrid>
				<CoinSpotlight />
				<div>Chart</div>
			</ChartGrid>
		</Page>
	);
};

export default index;
