<template>
  <div>{{ count }} {{ name }}</div>
  <div>{{ nameCount }}</div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'TsDemo',
  data() {
    return {
      name: '' as string,
    }
  },
  setup() {
    const count = ref<number>(0)
    return {
      count,
    }
  },
  computed: {
    nameCount(): string {
      return this.name + this.count
    },
  },
})
</script>

<style lang="scss">

</style>
