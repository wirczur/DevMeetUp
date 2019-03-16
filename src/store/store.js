import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
import user from './modules/user.module';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ user: state.user }),
});

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [vuexLocal.plugin],
});
