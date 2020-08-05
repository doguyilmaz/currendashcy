import React from 'react';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
	color: green;
	cursor: pointer;
	padding: 10px;
	width: 150px;
	border: 2px solid lightgray;
	border-radius: 10px;
	text-align: center;
	vertical-align: middle;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	margin: 1rem 0;
	transition: 0.2s ease all;

	&:hover {
		background: rebeccapurple;
		color: white;
	}

	${(props) =>
		props.primary &&
		css`
			background: rebeccapurple;
			color: wheat;

			&:hover {
				background: purple;
				border-color: purple;
			}
		`}

	${(props) =>
		props.outlined &&
		css`
			background: transparent;
			color: rebeccapurple;
		`}
`;

const FlamedButton = styled(MyButton)`
	background-image: linear-gradient(to right, red, orange, yellow);
	color: black;

	&:hover {
		background-image: linear-gradient(to right, yellow, orange, red);
	}
`;

const Buttons = () => {
	return (
		<>
			<MyButton>Hello</MyButton>
			<MyButton primary>Primary</MyButton>
			<MyButton outlined>Outlined</MyButton>
			<FlamedButton>Flamed</FlamedButton>
		</>
	);
};

export default Buttons;
