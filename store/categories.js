export const state = () => ({
  categories: [],
  catalogs: []
})

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  },
  setCatalogs(state, payload) {
    state.catalogs = payload
  }
}

export const actions = {
  async fetch({ commit }) {
    const razdels = await this.$strapi.find('categories')
    commit('setCategories', razdels)
  },
  async sortCategories({ state, commit }, { ind, index }) {
    if ( state.categories[index].categories[ind].catalog != null ) {
      const catalogs = state.categories[index].categories[ind].catalog.catalogs
      commit('setCatalogs', catalogs)
    } else {
      commit('setCatalogs', [])
    }
  }
}

export const getters = {
  getCategories: s => s.categories,
  getCatalogs: s => s.catalogs,
}