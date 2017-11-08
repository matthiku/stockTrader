const state = {
  logs: [],
};

const mutations = {
  'WRITE_LOG' (state, [what, data]) {
    console.log('writing log: ' + what);
    let a = new Date();
    state.logs.push({action: what, data, timestamp: a.toISOString()});
  },
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