import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
import user from './modules/user.module';
import settings from './modules/settings.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ user: state.user }),
});

export default new Vuex.Store({
  modules: {
    user,
    settings,
  },
  plugins: [vuexLocal.plugin],
});
