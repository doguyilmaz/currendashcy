import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Layout/Page';
import CoinGrid from '../Layout/CoinGrid';

const index = () => {
	return (
		<Page name='settings'>
			<Welcome />
			<CoinGrid favSection />
			<ConfirmButton />
			<CoinGrid />
		</Page>
	);
};

export default index;
