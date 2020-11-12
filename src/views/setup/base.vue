<template>
  <div>
    <span>List: {{ listStr }}</span>
    <span>React count: {{ reactCount }}</span>
  </div>
</template>

<script lang="ts">
import { ref, watch, watchEffect, computed, onMounted, onBeforeUnmount } from 'vue'
import getRepo from '@/views/setup/setup-repo'
export default {
  name: 'base',
  setup() {
    const list = ref<string[]>([])
    const info = ref({})
    const count = ref<number>(0)
    const reactCount = getRepo()

    watchEffect(() => {
      console.log('watchEffect count', count.value)
    })

    watchEffect(() => {
      console.log('watchEffect', list.value)
    })

    setTimeout(() => {
      list.value.push('Jim', 'Al')
      info.value = {
        title: 'Title',
      }
      count.value++

      setTimeout(() => {
        list.value.push('Li')
      }, 1000)
    }, 1000)

    watch(list, (newVal, oldVal) => {
      console.log(`watch list newVal = ${newVal}, oldVal = ${oldVal}`)
    })

    const listStr = computed(() => list.value.join(', '))

    onMounted(() => {
      console.log('Setup onMounted', performance.now())
    })

    onBeforeUnmount(() => {
      console.log('Setup onBeforeUnmount')
    })

    return {
      list,
      listStr,
      info,
      reactCount,
    }
  },
}
</script>

<style lang="scss"></style>
