
const uuidv1 = require('uuid/v1');

const initialState = () => ({
  userId: null,
  isAdmin: true,
});

const state = initialState;

const getters = {
  userId: store => store.userId,
  isAdmin: store => store.isAdmin,
};

const mutations = {
  SET_USER_ID(store, userId) {
    const _store = store;
    _store.userId = userId;
  },
};

const actions = {
  // eslint-disable-next-line no-shadow
  setInitialUserID({ commit, getters }) {
    if (getters.userId) {
      return;
    }
    console.log('test');
    commit('SET_USER_ID', uuidv1());
  },

};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
