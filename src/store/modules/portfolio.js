const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity,
        initPrice: stockPrice,
      });
    }
    state.funds -= stockPrice * quantity;
  },

  'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  },
};

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order);
    commit('WRITE_LOG', ['SELL_STOCK', order]);
  }
};

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        initPrice: stock.initPrice,
        name: record.name,
        price: record.price,
        oldPrice: record.oldPrice,
      }
    });
  },
  funds (state) {
    return state.funds;
  },
  portfolioLog (state) {
    return state.logs;
  },
  portfolioValue (state, getters) {
    let val = 0;
    state.stocks.forEach(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      val += Number(stock.quantity) * record.price;
    });
    return val;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
}