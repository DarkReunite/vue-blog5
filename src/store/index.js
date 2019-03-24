import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api/api.export';


Vue.use(Vuex);

const state = {
  websiteName: null,
  description: null,
  master: null,
}

const mutations = {
  setWebInfo(state, info) {
    if (info) {
      state.websiteName = info.websiteName;
      state.description = info.description;
      state.master = info.master
    }
  }
}

const actions = {
  getWebInfo({commit}) {
    api.user.getWebInfo().then( res => {
      if (res.data && res.data.data) {
        let webInfo = res.data.data;
        commit('setWebInfo', webInfo)
      }
    });

  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})