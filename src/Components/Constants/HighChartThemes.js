const HighChartThemes = {
	dark: {
		colors: [
			'yellow',
			'coral',
			'magenta',
			'lightgreen',
			'darkred',
			'blue',
			'rebeccapurple',
			'orange',
			'darkgreen',
			'teal',
		],
		chart: {
			backgroundColor: 'dark',
			borderColor: '#000000',
			borderWidth: 0,
			className: 'dark-container',
			plotBackgroundColor: 'rgba(255, 255, 255, 0)',
			plotBorderColor: '#CCCCCC',
			plotBorderWidth: 0,
		},
		title: {
			style: {
				color: '#C0C0C0',
				font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
			},
		},
		subtitle: {
			style: {
				color: '#666666',
				font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
			},
		},
		xAxis: {
			gridLineColor: '#333333',
			gridLineWidth: 1,
			labels: {
				style: {
					color: '#A0A0A0',
				},
			},
			lineColor: '#A0A0A0',
			tickColor: '#A0A0A0',
			title: {
				style: {
					color: '#CCC',
					fontWeight: 'bold',
					fontSize: '12px',
					fontFamily: 'Trebuchet MS, Verdana, sans-serif',
				},
			},
		},
		yAxis: {
			gridLineColor: '#333333',
			labels: {
				style: {
					color: '#A0A0A0',
				},
			},
			lineColor: '#A0A0A0',
			minorTickInterval: null,
			tickColor: '#A0A0A0',
			tickWidth: 1,
			title: {
				style: {
					color: '#CCC',
					fontWeight: 'bold',
					fontSize: '12px',
					fontFamily: 'Trebuchet MS, Verdana, sans-serif',
				},
			},
		},
		tooltip: {
			backgroundColor: 'rgba(0, 0, 0, 0.75)',
			style: {
				color: '#F0F0F0',
			},
		},
		toolbar: {
			itemStyle: {
				color: 'silver',
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					color: '#CCC',
				},
				marker: {
					lineColor: '#333',
				},
			},
			spline: {
				marker: {
					lineColor: '#333',
				},
			},
			scatter: {
				marker: {
					lineColor: '#333',
				},
			},
			candlestick: {
				lineColor: 'white',
			},
		},
		legend: {
			itemStyle: {
				font: '9pt Trebuchet MS, Verdana, sans-serif',
				color: '#A0A0A0',
			},
			itemHoverStyle: {
				color: '#FFF',
			},
			itemHiddenStyle: {
				color: '#444',
			},
		},
		credits: {
			style: {
				color: '#666',
			},
		},
		labels: {
			style: {
				color: '#CCC',
			},
		},

		navigation: {
			buttonOptions: {
				backgroundColor: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#606060'],
						[0.6, '#333333'],
					],
				},
				borderColor: '#000000',
				symbolStroke: '#C0C0C0',
				hoverSymbolStroke: '#FFFFFF',
			},
		},

		exporting: {
			buttons: {
				exportButton: {
					symbolFill: '#55BE3B',
				},
				printButton: {
					symbolFill: '#7797BE',
				},
			},
		},

		// scroll charts
		rangeSelector: {
			buttonTheme: {
				fill: {
					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
					stops: [
						[0.4, '#888'],
						[0.6, '#555'],
					],
				},
				stroke: '#000000',
				style: {
					color: '#CCC',
					fontWeight: 'bold',
				},
				states: {
					hover: {
						fill: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
							stops: [
								[0.4, '#BBB'],
								[0.6, '#888'],
							],
						},
						stroke: '#000000',
						style: {
							color: 'white',
						},
					},
					select: {
						fill: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
							stops: [
								[0.1, '#000'],
								[0.3, '#333'],
							],
						},
						stroke: '#000000',
						style: {
							color: 'yellow',
						},
					},
				},
			},
			inputStyle: {
				backgroundColor: '#333',
				color: 'silver',
			},
			labelStyle: {
				color: 'silver',
			},
		},

		navigator: {
			handles: {
				backgroundColor: '#666',
				borderColor: '#AAA',
			},
			outlineColor: '#CCC',
			maskFill: 'rgba(16, 16, 16, 0.5)',
			series: {
				color: '#7798BF',
				lineColor: '#A6C7ED',
			},
		},

		scrollbar: {
			barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555'],
				],
			},
			barBorderColor: '#CCC',
			buttonArrowColor: '#CCC',
			buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555'],
				],
			},
			buttonBorderColor: '#CCC',
			rifleColor: '#FFF',
			trackBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0, '#000'],
					[1, '#333'],
				],
			},
			trackBorderColor: '#666',
		},

		// special colors for some of the
		legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		legendBackgroundColorSolid: 'rgb(35, 35, 70)',
		dataLabelsColor: '#444',
		textColor: '#C0C0C0',
		maskColor: 'rgba(255,255,255,0.3)',
	},
	light: {
		colors: [
			'#058DC7',
			'#50B432',
			'#ED561B',
			'#DDDF00',
			'#24CBE5',
			'#64E572',
			'#FF9655',
			'#FFF263',
			'#6AF9C4',
		],
		chart: {
			backgroundColor: {
				linearGradient: [0, 0, 500, 500],
				stops: [
					[0, 'rgb(255, 255, 255)'],
					[1, 'rgb(240, 240, 255)'],
				],
			},
		},
		title: {
			style: {
				color: '#000',
				font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
			},
		},
		subtitle: {
			style: {
				color: '#666666',
				font: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
			},
		},
		legend: {
			itemStyle: {
				font: '9pt Trebuchet MS, Verdana, sans-serif',
				color: 'black',
			},
			itemHoverStyle: {
				color: 'gray',
			},
		},
	},
};

export default HighChartThemes;