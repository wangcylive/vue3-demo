<template>
  <div>
    <div><label>obj1</label>{{ obj1.count }} <label>obj2</label>{{ obj2.name }}</div>
    <div>{{ objInfo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, isProxy, isReactive, computed, watchEffect } from 'vue'
export default defineComponent({
  name: 'basic-reactivity',
  setup() {
    const obj1 = reactive({ count: 1 })
    const readonlyObj1 = readonly(obj1)
    const obj2 = readonly({ name: 'obj2' })

    const objInfo = computed<string>(() => `obj1 count=${obj1.count}, obj2 name=${obj2.name}`)

    watchEffect(() => {
      console.log('watchEffect', obj1, objInfo.value)
    })

    console.log('isProxy', isProxy(obj1), isProxy(readonlyObj1), isProxy(obj2))
    console.log('isReactive', isReactive(obj1), isProxy(readonlyObj1), isReactive(obj2))
    obj1.count++

    return {
      obj1,
      obj2,
      objInfo,
    }
  },
})
</script>

<style lang="scss"></style>
