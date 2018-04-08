<<<<<<< HEAD
export default {
	// 修改当前打开的主菜单的index
	changeCurrOpenIndex(state, currOpenIndex) {
		state.currOpenIndex = currOpenIndex;
	},
	// 修改当前点击的子菜单的index
  changeCurrActiveIndex(state, currActiveIndex) {
		state.currActiveIndex = currActiveIndex;
	},

}
=======
/**
 * Created by John on 2017/11/30.
 */

export default {
  changeOpenIndex(state, currOpenIndex) {
    state.currOpenIndex = currOpenIndex;
  },
  changeActiveIndex(state, currActiveIndex) {
    state.currActiveIndex = currActiveIndex;
  },
};
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
