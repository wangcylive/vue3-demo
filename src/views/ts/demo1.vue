<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ str }}</div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'TsDemo1',
  data() {
    return {
      infoName: 'demo1' as string,
    }
  },
  setup() {
    const count = ref<number>(0)
    return {
      count,
    }
  },
  computed: {
    str(): string {
      return `name: ${this.infoName} count: ${this.count}`
    },
  },
})
</script>

<style lang="scss"></style>
