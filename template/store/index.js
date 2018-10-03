import Vuex from 'vuex'
import config from '~/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      anPetitionId: config.actionNetworkPetitonId,
      modalVisible: false,
      modalType: null
    },
    mutations: {
      setModalVisibility(state, value) {
        state.modalVisible = value
      },

      setModalType(state, value) {
        state.modalType = value
      }
    }
  })
}

export default createStore
