import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import logs    from './modules/logs';
import stocks   from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    logs,
    stocks,
    portfolio,
  }
});
