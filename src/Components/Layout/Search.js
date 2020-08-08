import React, { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import fuzzy from 'fuzzy';

import { backgroundColor2, fontSize2, fontF } from '../Constants/Styles';
import { AppContext } from '../Context/AppContext/AppProvider';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 200px auto;
	justify-content: center;
`;

const SearchInput = styled.input`
	${backgroundColor2};
	${fontSize2};
	${fontF};
	color: wheat;
	border: 1px solid;
	border-radius: 5px;
	height: 30px;
	place-self: center left;
`;

const handleFilter = _.debounce((input, coinList, setFilterCoins) => {
	// Get symbols
	const coinSymbols = Object.keys(coinList);
	// Get all coin names & map with symbol
	const coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
	// combine the search strings names&symbols
	const searchString = [...coinSymbols, ...coinNames];
	const fuzzyResult = fuzzy
		.filter(input, searchString, {})
		.map((res) => res.string);

	const filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
		const coinName = result.CoinName;
		return (
			_.includes(fuzzyResult, symbolKey) || _.includes(fuzzyResult, coinName)
		);
	});
	setFilterCoins(filteredCoins);
}, 500);

const filterCoins = (e, setCoins, list) => {
	const input = e.target.value;
	if (!input) {
		setCoins(null);
		return;
	}
	handleFilter(input, list, setCoins);
};

const Search = () => {
	const { setFilteredCoins, coinList } = useContext(AppContext);

	return (
		<SearchGrid>
			<h2>Search all coins</h2>
			<SearchInput
				onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
			/>
		</SearchGrid>
	);
};

export default Search;
