import React from 'react';

const Welcome = ({ name }) => {
	return <h1>Hello, {name || 'Guest'}...</h1>;
};

export default Welcome;
