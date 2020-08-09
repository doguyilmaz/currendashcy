import React, { useContext } from 'react';
import ReactHighCharts from 'react-highcharts';
import highChartsConfig from './HighChartsConfig';
import HighChartThemes from '../Constants/HighChartThemes';

import { Tile } from '../Layout/Tile';
import { AppContext } from '../Context/AppContext/AppProvider';

const CurrencyChart = React.memo(() => {
	const { theme } = useContext(AppContext);

	if (theme === 'light') {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.light);
	} else {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.dark);
	}

	return (
		<Tile>
			<ReactHighCharts config={highChartsConfig()} />
		</Tile>
	);
});

export default CurrencyChart;
