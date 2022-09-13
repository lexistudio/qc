export { default as Benefits } from '../..\\components\\Benefits.vue'
export { default as BenefitsTwo } from '../..\\components\\BenefitsTwo.vue'
export { default as Bookmark } from '../..\\components\\Bookmark.vue'
export { default as CatalogBox } from '../..\\components\\CatalogBox.vue'
export { default as CatalogModal } from '../..\\components\\CatalogModal.vue'
export { default as Chat } from '../..\\components\\Chat.vue'
export { default as ContactsFrom } from '../..\\components\\ContactsFrom.vue'
export { default as ContactsFromOrder } from '../..\\components\\ContactsFromOrder.vue'
export { default as ContactsMain } from '../..\\components\\ContactsMain.vue'
export { default as DeliveryMain } from '../..\\components\\DeliveryMain.vue'
export { default as Filters } from '../..\\components\\Filters.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as InfoTop } from '../..\\components\\InfoTop.vue'
export { default as LiItem } from '../..\\components\\LiItem.vue'
export { default as LogosClient } from '../..\\components\\LogosClient.vue'
export { default as LogoSlider } from '../..\\components\\LogoSlider.vue'
export { default as MainCatalog } from '../..\\components\\MainCatalog.vue'
export { default as Modal } from '../..\\components\\Modal.vue'
export { default as Responder } from '../..\\components\\Responder.vue'
export { default as SliderButton } from '../..\\components\\SliderButton.vue'
export { default as Tab } from '../..\\components\\Tab.vue'
export { default as Title } from '../..\\components\\Title.vue'
export { default as Warranty } from '../..\\components\\Warranty.vue'

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
