<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
=======
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff

Vue.use(Vuex)

const state = {
<<<<<<< HEAD
  currOpenIndex: '', // 当前打开的主菜单index
  currActiveIndex: '', // 当前点击的子菜单index
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
=======
  currOpenIndex: '', // 当前open的菜单
  currActiveIndex: '', // 当前点击激活的子菜单
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
