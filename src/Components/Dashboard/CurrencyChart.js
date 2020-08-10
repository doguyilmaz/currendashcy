import React, { useContext } from 'react';
import ReactHighCharts from 'react-highcharts';
import highChartsConfig from './HighChartsConfig';
import HighChartThemes from '../Constants/HighChartThemes';

import { Tile, HistoricalLoadingStyled } from '../Layout/Tile';
import { AppContext } from '../Context/AppContext/AppProvider';
import ChartSelect from './ChartSelectComponents';

import { lang } from '../Language/Lang';

const CurrencyChart = React.memo(() => {
	const {
		theme,
		historical,
		currentFav,
		coinList,
		changeChartInterval,
		changeChartPeriod,
		historicalInterval,
		locale,
	} = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	if (theme === 'light') {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.light);
	} else {
		ReactHighCharts.Highcharts.setOptions(HighChartThemes.dark);
	}

	return (
		<Tile>
			<ChartSelect
				changeChartInterval={changeChartInterval}
				changeChartPeriod={changeChartPeriod}
				historicalInterval={historicalInterval}
			/>
			{historical ? (
				<ReactHighCharts
					config={highChartsConfig(
						historical,
						coinList[currentFav].CoinName,
						localeLang
					)}
				/>
			) : (
				<HistoricalLoadingStyled>
					{localeLang.loadingHistoricalData}
				</HistoricalLoadingStyled>
			)}
		</Tile>
	);
});

export default CurrencyChart;
