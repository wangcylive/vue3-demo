<script>
import { h } from 'vue'
import LayoutComponent from './layout-component'
export default {
  name: 'SlotDemo',
  props: {
    dataId: {
      type: String,
    },
    dataClass: {
      type: String,
    },
  },
  setup(props, context) {
    console.log('slotDemo', props)
    return () =>
      h('div', [
        h(
          LayoutComponent,
          {},
          {
            header: () => h('div', 1),
            content: () => h('div', 2),
          }
        ),
        h('div', {
          innerHTML: `data-id="${props.dataId}"`,
        }),
        h('div', {}, context.slots)
      ])
  },
}
</script>

<style lang="scss"></style>
