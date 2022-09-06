export const state = () => ({
  brends: []
})

export const mutations = {
  setBrends( state, payload ) {
    state.brends = payload
  }
}

export const actions = {
  async fetch ({ commit }) {
    const brends = await this.$strapi.find("brends")
    commit('setBrends', brends)
  },
}

export const getters = {
  getBrends: s => s.brends
}