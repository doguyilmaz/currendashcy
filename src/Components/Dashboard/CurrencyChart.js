import React, { useContext, useEffect, useState } from 'react';
import ReactHighCharts from 'react-highcharts';
import highChartsConfig from './HighChartsConfig';
import HighChartThemes from '../Constants/HighChartThemes';

import { Tile } from '../Layout/Tile';
import { AppContext } from '../Context/AppContext/AppProvider';

const CurrencyChart = React.memo(() => {
	const [isDark, setDark] = useState(true);
	const { theme } = useContext(AppContext);

	// if (theme === 'light') {
	// 	ReactHighCharts.Highcharts.setOptions(HighChartThemes.light);
	// } else {
	// 	ReactHighCharts.Highcharts.setOptions(HighChartThemes.dark);
	// }

	useEffect(() => {
		theme === 'light' ? setDark(false) : setDark(true);
	}, [theme]);

	useEffect(() => {
		if (isDark) {
			console.log('dark basıldı');
			ReactHighCharts.Highcharts.setOptions(HighChartThemes.dark);
		} else {
			console.log('light basıldı');

			ReactHighCharts.Highcharts.setOptions(HighChartThemes.light);
		}
	}, [isDark]);

	return (
		<Tile>
			<ReactHighCharts config={highChartsConfig()} />
		</Tile>
	);
});

export default CurrencyChart;
