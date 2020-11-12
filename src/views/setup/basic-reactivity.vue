<template>
  <div></div>
</template>

<script lang="ts">
import { reactive, readonly, isProxy, isReactive } from 'vue'
export default {
  name: 'basic-reactivity',
  setup() {
    const obj1 = reactive({ count: 1 })
    const readonlyObj1 = readonly(obj1)
    const obj2 = readonly({ name: 'obj2' })

    console.log('isProxy', isProxy(obj1), isProxy(readonlyObj1), isProxy(obj2))
    console.log('isReactive', isReactive(obj1), isProxy(readonlyObj1), isReactive(obj2))

    obj1.count++
  },
}
</script>

<style lang="scss"></style>
