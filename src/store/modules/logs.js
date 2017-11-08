const state = {
  logs: [],
};

const mutations = {
  'WRITE_LOG' (state, [what, data]) {
    let a = new Date();
    state.logs.push({action: what, data, timestamp: a.toISOString()});
  },
  'SET_LOGS' (state, log) {
    state.logs = log;    
  }
};

const getters = {
  logs (state) {
    return state.logs;
  },
};

export default {
  state,
  mutations,
  getters,
}