import Vue from 'vue';


const loadData = ({commit}) => {

  Vue.http.get('stockTraderData.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;

        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit('SET_STOCKS', stocks);
        commit('WRITE_LOG', ['SET_STOCKS', stocks]);
        commit('SET_PORTFOLIO', portfolio);
        commit('WRITE_LOG', ['SET_PORTFOLIO', portfolio]);
      }
    });

};

export default {
  loadData,
}