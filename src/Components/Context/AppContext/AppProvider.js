import React from 'react';
const cc = require('cryptocompare');
// LATER: change api key
cc.setApiKey(
	'f3823db3d72b1912d435f973aa3015c1c858beb3a7ad9126886d4388b5585267'
);

export const AppContext = React.createContext({
	page: 'dashboard',
	locale: 'en',
	theme: 'light',
});

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locale: 'en',
			theme: 'light',
			page: 'dashboard',
			...this.savedSettings(),
			setLocale: this.setLocale,
			setTheme: this.setTheme,
			setPage: this.setPage,
			confirmFav: this.confirmFavourites,
		};
	}
	componentDidMount() {
		this.fetchCoins();
	}

	fetchCoins = async () => {
		const coinList = (await cc.coinList()).Data;
		this.setState({ coinList });
	};

	confirmFavourites = () => {
		this.setState({
			firstVisit: false,
			page: 'dashboard',
		});
		localStorage.setItem(
			'currenDashcy',
			JSON.stringify({
				user: 'Dou',
				token: '231231241@€qwe23.123',
			})
		);
	};

	// Refactor
	// FIX: if condition logic
	savedSettings = () => {
		const currendDashcyData = JSON.parse(localStorage.getItem('currenDashcy'));
		const locale = localStorage.getItem('locale');
		const theme = localStorage.getItem('theme');

		return !currendDashcyData
			? {
					page: 'settings',
					firstVisit: true,
			  }
			: {
					locale: locale || this.state.locale,
					theme: theme || this.state.theme,
			  };
	};

	setPage = (page) => this.setState({ page });

	setLocale = () => {
		this.setState({
			locale: this.state.locale === 'en' ? 'tr' : 'en',
		});
		localStorage.setItem('locale', this.state.locale === 'en' ? 'tr' : 'en');
	};

	setTheme = () => {
		this.setState({
			theme: this.state.theme === 'light' ? 'dark' : 'light',
		});
		localStorage.setItem(
			'theme',
			this.state.theme === 'light' ? 'dark' : 'light'
		);
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
