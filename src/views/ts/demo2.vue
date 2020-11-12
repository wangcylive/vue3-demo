<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { h, defineComponent } from 'vue'
export default defineComponent({
  name: 'demo2',
  setup(props, context) {
    return {}
  },
})
</script>

<style lang="scss"></style>
