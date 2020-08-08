import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2, fontF } from '../Constants/Styles';

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

const Search = () => {
	return (
		<SearchGrid>
			<h2>Search all coins</h2>
			<SearchInput />
		</SearchGrid>
	);
};

export default Search;
