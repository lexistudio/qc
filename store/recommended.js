export const state = () => ({
  recommendeds: []
})

export const mutations = {
  setRecommendeds(state, payload) {
    state.recommendeds = payload
  }
}

export const actions = {
  async fetch({ commit }) {
    const recommendeds = await this.$strapi.find('remomendacis')
    commit('setRecommendeds', recommendeds)
  }
}

export const getters = {
  getRecommendeds: s => s.recommendeds
}