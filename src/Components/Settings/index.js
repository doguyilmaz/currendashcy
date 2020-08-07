import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Layout/Page';
import CoinGrid from './CoinGrid';

const index = () => {
	return (
		<Page name='settings'>
			<Welcome />
			<ConfirmButton />
			<CoinGrid />
		</Page>
	);
};

export default index;
