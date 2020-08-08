import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Layout/Page';
import CoinGrid from '../Layout/CoinGrid';
import Search from '../Layout/Search';

const index = () => {
	return (
		<Page name='settings'>
			<Welcome />
			<CoinGrid favSection />
			<ConfirmButton />
			<Search />
			<CoinGrid />
		</Page>
	);
};

export default index;
