export const state = () => ({
  catalogs: [],
  catalogsItem: {},
  categories: [],
  count: 8,
  counts: 0,
  preloader: false
})

export const mutations = {
  setCatalogs(state, payload) {
    state.catalogs = payload
  },
  setCatalogsItems(state, payload) {
    state.catalogsItem = payload
  },
  setCategories(state, payload) {
    state.categories = payload
  },
  setPagenation(state, payload) {
    state.count = payload
  },
  setCount(state, payload) {
    state.count = payload
  },
  setCounts(state, payload) {
    state.counts = payload
  },
  setPreloader(state, payload) {
    state.preloader = payload
  }
}

export const actions = {
  async fetch ({ commit }, { count }) {
    const catalogs = await this.$strapi.find(`catalogs?_limit=${count}`)
    await commit('setCatalogs', catalogs)
  },
  async categories({ commit }) {
    const razdels = await this.$strapi.find('categories')
    await commit('setCategories', razdels)
  },
  async catalogsItems ({ commit }, id) {
    const catalogsItem = await this.$strapi.$catalogs.findOne(id)
    commit('setCatalogsItems', catalogsItem)
  },
  async searchCatalogs({ commit }, search) {
    const result = await this.$strapi.find(`catalogs?vendorCode=${search}`)
    await commit('setCatalogs', result)
  },
  async sortCategories({ state, commit }, { ind, index }) {
    const catalogs = await state.categories[index].categories[ind].catalog.catalogs
    commit('setCatalogs', catalogs)
  },
  async pageCatalog({ dispatch, state, commit }) {
    let count = state.count + 8
    commit('setPreloader', true)
    await commit('setCount', count)
    await dispatch('fetch', { count: count })
    await commit('setPreloader', false)
  },
  async counts({ commit }) {
    const counts = await this.$strapi.find(`catalogs/count`)
    commit('setCounts', counts)
  },
  resetCount({ commit }) {
    commit('setCount', 8)
  },
  async sortBrend({ commit }, id) {
    const brend = await this.$strapi.$brends.findOne(id)
    await commit('setCatalogs', brend.catalogs)
  }
}

export const getters = {
  getCatalogs: s => s.catalogs,
  getCatalogsItem: s => s.catalogsItem,
  getCategories: s => s.categories,
  getPreloader: s => s.preloader,
  getCount: s => s.count,
  getCounts: s => s.counts
}