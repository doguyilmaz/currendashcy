import React from "react";
import _ from "lodash";
import moment from "moment";

import { lang } from "../../Language/Lang";

const cc = require("cryptocompare");
// LATER: change api key
cc.setApiKey(process.env.CC_API_KEY); // on vercel env vars

// TODO: clear data local storage favs etc.
// TODO: theme all / languages
// TODO: set local storage interval/period

const MAX_FAVOURITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: "en",
      theme: "light",
      page: "dashboard",
      favourites: [],
      historicalInterval: "months",
      historicalPeriod: 14,
      ...this.savedSettings(),
      setLocale: this.setLocale,
      setTheme: this.setTheme,
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isFavourited: this.isFavourited,
      confirmFav: this.confirmFavourites,
      setFilteredCoins: this.setFilteredCoins,
      setCurrentFav: this.setCurrentFav,
      changeChartInterval: this.changeChartInterval,
      changeChartPeriod: this.changeChartPeriod,
      logout: this.logout,
    };
    this.localeLang = this.state.locale === "en" ? lang.en : lang.tr;
  }
  componentDidMount() {
    if (!this.state.firstVisit) {
      if (localStorage.getItem("locale") === "en") {
        this.setState({ page: "dashboard" });
      } else {
        this.setState({ page: "panel" });
      }
    }
    this.fetchCoins();
    this.fetchCurrencies();
    this.fetchHistorical();
  }

  logout = () => {
    // clear local storage
    // setFirstVisit: null
    // page: settings/ayarlar
    // fav = []
    localStorage.removeItem("currenDashcy");
    this.setState({
      firstVisit: null,
      favourites: [],
      currentFav: null,
      filteredCoins: null,
      page: this.state.locale === "en" ? "settings" : "ayarlar",
    });
    window.location.reload();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  addCoin = (key) => {
    let favourites = [...this.state.favourites];
    if (favourites.length < MAX_FAVOURITES) {
      favourites.push(key);
      this.setState({ favourites });
    }
  };

  fetchCurrencies = async () => {
    if (this.state.firstVisit) return;
    let currencies = await this.currencies();
    currencies = currencies.filter((currency) => Object.keys(currency).length);
    this.setState({ currencies });
  };

  currencies = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favourites.length; i++) {
      try {
        const priceData = await cc.priceFull(
          this.state.favourites[i],
          this.state.locale === "en" ? "USD" : "TRY"
        );
        returnData.push(priceData);
      } catch (error) {
        console.warn("Fething currency error => ", error);
      }
    }
    return returnData;
  };

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    const res = await this.historical();
    const historical = [
      {
        name: this.state.currentFav,
        data: res.map((value, idx) => [
          moment()
            .subtract({
              [this.state.historicalInterval]:
                this.state.historicalPeriod - idx,
            })
            .valueOf(),
          this.state.locale === "en" ? value.USD : value.TRY,
        ]),
      },
    ];
    this.setState({
      historical,
    });
  };

  historical = () => {
    let promises = [];

    for (let units = this.state.historicalPeriod; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFav,
          [`${this.state.locale === "en" ? "USD" : "TRY"}`],
          moment()
            .subtract({ [this.state.historicalInterval]: units })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };

  removeCoin = (key) => {
    let favourites = [...this.state.favourites];
    this.setState({ favourites: _.pull(favourites, key) });
  };

  isFavourited = (key) => _.includes(this.state.favourites, key);

  confirmFavourites = () => {
    const currentFav = this.state.favourites[0];

    this.setState(
      {
        firstVisit: false,
        page: this.localeLang.dashboard,
        currentFav,
        prices: null,
        historical: null,
      },
      () => {
        this.fetchCurrencies();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "currenDashcy",
      JSON.stringify({
        user: "Dou",
        favourites: this.state.favourites,
        currentFav,
      })
    );
  };

  setCurrentFav = (symbol) => {
    this.setState(
      {
        currentFav: symbol,
        historical: null,
      },
      this.fetchHistorical
    );

    localStorage.setItem(
      "currenDashcy",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("currenDashcy")),
        currentFav: symbol,
      })
    );
  };

  // Refactor
  savedSettings = () => {
    const currendDashcyData = JSON.parse(localStorage.getItem("currenDashcy"));
    const locale = localStorage.getItem("locale");
    const theme = localStorage.getItem("theme");

    let localData = {};

    if (!currendDashcyData) {
      localData = {
        page: locale && locale === "en" ? "settings" : "ayarlar",
        firstVisit: true,
      };
    } else {
      const { favourites, currentFav } = currendDashcyData;
      localData = {
        favourites,
        currentFav,
      };
    }

    return { ...localData, locale: locale || "tr", theme: theme || "light" };
  };

  setPage = (page) => this.setState({ page });

  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

  setLocale = () => {
    this.setState(
      {
        locale: this.state.locale === "en" ? "tr" : "en",
        page:
          this.state.page === "dashboard" || this.state.page === "panel"
            ? this.state.page === "dashboard"
              ? "panel"
              : "dashboard"
            : this.state.page === "settings"
            ? "ayarlar"
            : "settings",
      },
      window.location.reload()
    );
    localStorage.setItem("locale", this.state.locale === "en" ? "tr" : "en");
  };

  setTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
    localStorage.setItem(
      "theme",
      this.state.theme === "light" ? "dark" : "light"
    );
    window.location.reload();
  };

  changeChartInterval = (value) => {
    this.setState(
      { historicalInterval: value, historical: null },
      this.fetchHistorical
    );
  };

  changeChartPeriod = (value) => {
    this.setState(
      { historicalPeriod: value, historical: null },
      this.fetchHistorical
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
