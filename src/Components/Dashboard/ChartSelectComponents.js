import React from 'react';
import { SelectStyled } from '../Constants/Dashboard';

const ChartSelect = ({
	changeChartInterval,
	changeChartPeriod,
	historicalInterval,
}) => {
	const basicOptionWriter = (val) => {
		return `${val}-${
			historicalInterval === 'months'
				? 'month'
				: historicalInterval === 'weeks'
				? 'week'
				: 'day'
		}`;
	};
	return (
		<>
			<SelectStyled
				defaultValue={14}
				onChange={(e) => changeChartPeriod(e.target.value)}
			>
				<option value={8}>{basicOptionWriter(6)}</option>
				<option value={14}> {basicOptionWriter(12)}</option>
				<option value={20}> {basicOptionWriter(18)}</option>
				<option value={26}> {basicOptionWriter(24)}</option>
			</SelectStyled>
			<SelectStyled
				defaultValue={'months'}
				onChange={(e) => changeChartInterval(e.target.value)}
			>
				<option value='days'> Days</option>
				<option value='weeks'> Weeks</option>
				<option value='months'> Months</option>
			</SelectStyled>
		</>
	);
};

export default ChartSelect;
