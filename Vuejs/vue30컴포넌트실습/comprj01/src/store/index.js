import { createStore } from 'vuex';

import counterStore from './modules/counterStore';
import todoStore from './modules/todoStore';

export default createStore({
  //state: {},
  // getters: {},
  //mutations: {},
  //actions: {},
  modules: {
    //"모듈명: store명", 형태로 저장됩니다.
    counterStore: counterStore,
    todoStore: todoStore,
  },
});
