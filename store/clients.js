export const state = () => ({
  logos: []
})

export const mutations = {
  setLogos( state, payload ) {
    state.logos = payload
  }
}

export const actions = {
  async fetch({ commit }) {
    const logos = await this.$strapi.find('clients')
    commit('setLogos', logos)
  }
}

export const getters = {
  getLogos: s => s.logos
}