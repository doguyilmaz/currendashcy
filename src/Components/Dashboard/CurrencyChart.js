import React, { useContext } from 'react';
import ReactHighCharts from 'react-highcharts';
import highChartsConfig from './HighChartsConfig';
import HighChartThemes from '../Constants/HighChartThemes';

import { Tile, HistoricalLoadingStyled } from '../Layout/Tile';
import { AppContext } from '../Context/AppContext/AppProvider';

const CurrencyChart = React.memo(() => {
	const { theme, historical, currentFav, coinList } = useContext(AppContext);

	if (theme === 'light') {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.light);
	} else {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.dark);
	}

	return (
		<Tile>
			{historical ? (
				<ReactHighCharts
					config={highChartsConfig(historical, coinList[currentFav].CoinName)}
				/>
			) : (
				<HistoricalLoadingStyled>
					Loading Historical Data...
				</HistoricalLoadingStyled>
			)}
		</Tile>
	);
});

export default CurrencyChart;