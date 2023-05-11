import firebase from "firebase/app"
import "firebase/auth"

const state = {
  user: null,
  loading: false,
  error: null,
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
}

const actions = {
  async signUp({ commit }, { email, password }) {
    commit("setLoading", true)
    commit("setError", null)
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      const user = userCredential.user
      commit("setUser", user)
      commit("setLoading", false)
    } catch (error) {
      commit("setLoading", false)
      commit("setError", error.message)
    }
  },
  async signIn({ commit }, { email, password }) {
    commit("setLoading", true)
    commit("setError", null)
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      const user = userCredential.user
      commit("setUser", user)
      commit("setLoading", false)
    } catch (error) {
      commit("setLoading", false)
      commit("setError", error.message)
    }
  },
  async signOut({ commit }) {
    commit("setLoading", true)
    try {
      await firebase.auth().signOut()
      commit("setUser", null)
      commit("setLoading", false)
    } catch (error) {
      commit("setLoading", false)
      commit("setError", error.message)
    }
  },
}

const getters = {
  user(state) {
    return state.user
  },
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
