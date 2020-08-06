import React from 'react';

export const AppContext = React.createContext({
	page: 'dashboard',
	locale: 'en',
	theme: 'light',
});

export class AppProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashboard',
			locale: 'en',
			theme: 'light',
			setPage: this.setPage,
			setLocale: this.setLocale,
			setTheme: this.setTheme,
		};
	}

	setPage = (page) => this.setState({ page });

	setLocale = () => {
		this.setState({
			locale: this.state.locale === 'en' ? 'tr' : 'en',
		});
	};

	setTheme = () => {
		this.setState({
			theme: this.state.theme === 'light' ? 'dark' : 'light',
		});
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
