import stocks from '../../data/stocks';

const state = {
  stocks: [],
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.oldPrice = stock.price;
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.4));
    });
  }
}

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
    commit('WRITE_LOG', ['BUY_STOCK', order]);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks);
    commit('WRITE_LOG', ['SET_STOCKS', stocks]);
    commit('RND_STOCKS');
    commit('WRITE_LOG', ['RND_STOCKS', state.stocks]);
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
    commit('WRITE_LOG', ['RND_STOCKS', state.stocks]);
  },
}

const getters = {
  stocks: state => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
