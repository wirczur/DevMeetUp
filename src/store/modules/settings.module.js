// eslint-disable-next-line import/extensions
import RepositoryFactory from '@/repositories/repository.factory';

const settingsRepository = RepositoryFactory.get('settings');

const initialState = () => ({
  settings: {
    title: null,
    color: null,
  },
});

const state = initialState;

const getters = {
  settings: store => store.settings,
};

const mutations = {
  SET_SETTINGS(store, settings) {
    const _store = store;
    _store.settings = settings;
  },
};

const actions = {
  async getSettings(context) {
    const res = await settingsRepository.get();

    context.commit('SET_SETTINGS', res);

    return res;
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};
