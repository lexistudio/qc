import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2cdb18f8 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _164ccc76 = () => interopDefault(import('..\\pages\\api.vue' /* webpackChunkName: "pages/api" */))
const _4c872fbc = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages/articles" */))
const _0b766d84 = () => interopDefault(import('..\\pages\\catalog\\index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _3d67fb38 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _79eb4893 = () => interopDefault(import('..\\pages\\info.vue' /* webpackChunkName: "pages/info" */))
const _698d9af4 = () => interopDefault(import('..\\pages\\recommended.vue' /* webpackChunkName: "pages/recommended" */))
const _b1dae38c = () => interopDefault(import('..\\pages\\request.vue' /* webpackChunkName: "pages/request" */))
const _bcc5c13e = () => interopDefault(import('..\\pages\\warranty.vue' /* webpackChunkName: "pages/warranty" */))
const _1e500326 = () => interopDefault(import('..\\pages\\catalog\\_id.vue' /* webpackChunkName: "pages/catalog/_id" */))
const _4c92f3bd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2cdb18f8,
    name: "about"
  }, {
    path: "/api",
    component: _164ccc76,
    name: "api"
  }, {
    path: "/articles",
    component: _4c872fbc,
    name: "articles"
  }, {
    path: "/catalog",
    component: _0b766d84,
    name: "catalog"
  }, {
    path: "/contacts",
    component: _3d67fb38,
    name: "contacts"
  }, {
    path: "/info",
    component: _79eb4893,
    name: "info"
  }, {
    path: "/recommended",
    component: _698d9af4,
    name: "recommended"
  }, {
    path: "/request",
    component: _b1dae38c,
    name: "request"
  }, {
    path: "/warranty",
    component: _bcc5c13e,
    name: "warranty"
  }, {
    path: "/catalog/:id",
    component: _1e500326,
    name: "catalog-id"
  }, {
    path: "/",
    component: _4c92f3bd,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
