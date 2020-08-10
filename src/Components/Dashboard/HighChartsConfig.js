import { lang } from '../Language/Lang';

export default function (historical, coinName, localeLang) {
	return {
		title: {
			text: `${localeLang.historicalData}: ${coinName}`,
		},

		subtitle: {
			text: `${localeLang.lastUpdate} -> ${localeLang.data}: ${new Date(
				historical[0].data[historical[0].data.length - 1][0]
			).toLocaleDateString()} - ${
				localeLang.page
			}: ${new Date().toLocaleString()}`,
		},

		yAxis: {
			title: {
				text: 'Currency',
			},
		},

		xAxis: {
			type: 'datetime',
			// accessibility: {
			// 	rangeDescription: 'Range: 2010 to 2017',
			// },
		},

		credits: {
			enabled: false,
		},

		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
		},

		plotOptions: {
			series: {
				label: {
					connectorAllowed: false,
				},
				pointStart: 2010,
			},
		},

		// labels: {
		// 	style: {
		// 		color: '#CCC',
		// 	},
		// },

		// navigation: {
		// 	buttonOptions: {
		// 		symbolStroke: '#DDDDDD',
		// 		hoverSymbolStroke: '#FFFFFF',
		// 		theme: {
		// 			fill: {
		// 				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		// 				stops: [
		// 					[0.4, '#606060'],
		// 					[0.6, '#333333'],
		// 				],
		// 			},
		// 		},
		// 	},
		// },

		series: historical,

		responsive: {
			rules: [
				{
					condition: {
						maxWidth: 500,
					},
					chartOptions: {
						legend: {
							layout: 'horizontal',
							align: 'center',
							verticalAlign: 'bottom',
						},
					},
				},
			],
		},
	};
}
