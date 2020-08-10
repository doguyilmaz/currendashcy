import React, { useContext } from 'react';
import { SelectStyled } from '../Constants/Dashboard';

import { AppContext } from '../Context/AppContext/AppProvider';
import { lang } from '../Language/Lang';

const ChartSelect = ({
	changeChartInterval,
	changeChartPeriod,
	historicalInterval,
}) => {
	const { locale } = useContext(AppContext);
	const localeLang = locale === 'en' ? lang.en : lang.tr;

	const basicOptionWriter = (val) => {
		return `${val}-${
			historicalInterval === 'months'
				? `${localeLang.day}`
				: historicalInterval === 'weeks'
				? `${localeLang.week}`
				: `${localeLang.month}`
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
				<option value='days'> {localeLang.days}</option>
				<option value='weeks'> {localeLang.weeks}</option>
				<option value='months'> {localeLang.months}</option>
			</SelectStyled>
		</>
	);
};

export default ChartSelect;
