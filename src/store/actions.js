import Vue from 'vue';


const loadData = ({commit}) => {

  Vue.http.get('stockTraderData.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const logs = data.logs;
        const stocks = data.stocks;

        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          stockPortfolio,
          funds,
        };

        commit('SET_LOGS', logs);
        commit('WRITE_LOG', ['LOAD_DATA', 'Data loaded from Server.']);
        commit('SET_STOCKS', stocks);
        commit('WRITE_LOG', ['SET_STOCKS', stocks]);
        commit('SET_PORTFOLIO', portfolio);
        commit('WRITE_LOG', ['SET_PORTFOLIO', portfolio]);
      }
    });

};

const saveData = ({commit}, data) => {
  Vue.http.put('stockTraderData.json', data)
    .then(data => {
        console.log(data);
        commit('WRITE_LOG', ['SAVE_DATA', 'Data saved on Server, Status: '+data.statusText]);
      });
};

export default {
  loadData,
  saveData,
}