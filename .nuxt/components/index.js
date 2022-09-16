export const IoSocketStatus = () => import('../..\\node_modules\\nuxt-socket-io\\lib\\components\\SocketStatus.js' /* webpackChunkName: "components/io-socket-status" */).then(c => wrapFunctional(c.default || c))
export const Benefits = () => import('../..\\components\\Benefits.vue' /* webpackChunkName: "components/benefits" */).then(c => wrapFunctional(c.default || c))
export const BenefitsTwo = () => import('../..\\components\\BenefitsTwo.vue' /* webpackChunkName: "components/benefits-two" */).then(c => wrapFunctional(c.default || c))
export const Bookmark = () => import('../..\\components\\Bookmark.vue' /* webpackChunkName: "components/bookmark" */).then(c => wrapFunctional(c.default || c))
export const CatalogBox = () => import('../..\\components\\CatalogBox.vue' /* webpackChunkName: "components/catalog-box" */).then(c => wrapFunctional(c.default || c))
export const CatalogModal = () => import('../..\\components\\CatalogModal.vue' /* webpackChunkName: "components/catalog-modal" */).then(c => wrapFunctional(c.default || c))
export const Chat = () => import('../..\\components\\Chat.vue' /* webpackChunkName: "components/chat" */).then(c => wrapFunctional(c.default || c))
export const ContactsFrom = () => import('../..\\components\\ContactsFrom.vue' /* webpackChunkName: "components/contacts-from" */).then(c => wrapFunctional(c.default || c))
export const ContactsFromOrder = () => import('../..\\components\\ContactsFromOrder.vue' /* webpackChunkName: "components/contacts-from-order" */).then(c => wrapFunctional(c.default || c))
export const ContactsMain = () => import('../..\\components\\ContactsMain.vue' /* webpackChunkName: "components/contacts-main" */).then(c => wrapFunctional(c.default || c))
export const DeliveryMain = () => import('../..\\components\\DeliveryMain.vue' /* webpackChunkName: "components/delivery-main" */).then(c => wrapFunctional(c.default || c))
export const Filters = () => import('../..\\components\\Filters.vue' /* webpackChunkName: "components/filters" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const InfoTop = () => import('../..\\components\\InfoTop.vue' /* webpackChunkName: "components/info-top" */).then(c => wrapFunctional(c.default || c))
export const LiItem = () => import('../..\\components\\LiItem.vue' /* webpackChunkName: "components/li-item" */).then(c => wrapFunctional(c.default || c))
export const LogosClient = () => import('../..\\components\\LogosClient.vue' /* webpackChunkName: "components/logos-client" */).then(c => wrapFunctional(c.default || c))
export const LogoSlider = () => import('../..\\components\\LogoSlider.vue' /* webpackChunkName: "components/logo-slider" */).then(c => wrapFunctional(c.default || c))
export const MainCatalog = () => import('../..\\components\\MainCatalog.vue' /* webpackChunkName: "components/main-catalog" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Responder = () => import('../..\\components\\Responder.vue' /* webpackChunkName: "components/responder" */).then(c => wrapFunctional(c.default || c))
export const SliderButton = () => import('../..\\components\\SliderButton.vue' /* webpackChunkName: "components/slider-button" */).then(c => wrapFunctional(c.default || c))
export const Tab = () => import('../..\\components\\Tab.vue' /* webpackChunkName: "components/tab" */).then(c => wrapFunctional(c.default || c))
export const Title = () => import('../..\\components\\Title.vue' /* webpackChunkName: "components/title" */).then(c => wrapFunctional(c.default || c))
export const Warranty = () => import('../..\\components\\Warranty.vue' /* webpackChunkName: "components/warranty" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
