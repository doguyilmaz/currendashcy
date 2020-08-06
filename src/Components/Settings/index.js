import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Layout/Page';

const index = () => {
	return (
		<Page>
			<Welcome name='Doğu' />
			<ConfirmButton />
		</Page>
	);
};

export default index;
