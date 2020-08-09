import React from 'react';

import Page from '../Layout/Page';
import CurrencyGrid from './CurrencyGrid';

const index = () => {
	return (
		<Page name='dashboard'>
			<CurrencyGrid />
		</Page>
	);
};

export default index;
