import { createStore } from 'vuex'

export default createStore({
  state: {
    slideIndex: 0,
  },
  getters: {
    slideIndex(state){
      return state.slideIndex
    }
  },
  mutations: {
    incrementarSliderIndex(state){
      state.slideIndex++;
    },
    sliderIndexOne(state){
      state.slideIndex = 1
    }
  },
  actions: {
  },
  modules: {
  }
})
