export { default as Alert } from '../../components/Alert.vue'
export { default as CheckoutButton } from '../../components/CheckoutButton.vue'
export { default as Content } from '../../components/Content.vue'
export { default as Input } from '../../components/Input.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Reservation } from '../../components/Reservation.vue'

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
