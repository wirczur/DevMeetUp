
const uuidv1 = require('uuid/v1');

const initialState = () => ({
  userId: uuidv1(),
  isAdmin: false,
});

const state = initialState;

const getters = {
  isAdmin: store => store.isAdmin,
};

const mutations = {};
const actions = {};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
