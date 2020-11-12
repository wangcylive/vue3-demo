<template>
  <div>
    <h5>Watch & WatchEffect</h5>
    <div>Count: {{ count }} <button @click="onAddCount">Add</button></div>
    <div>
      Year: {{ year }} Month: {{ month }} <button @click="onAddYear">Year Add</button
      ><button @click="onAddMonth">Month Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue'
const info = reactive<Map<string, string>>(new Map())
watch(info, () => {
  console.log('ts info', info)
})
info.set('key', new Date().toUTCString())
export default {
  name: 'watch',
  setup() {
    const count = ref<number>(0)
    const year = ref<number>(2000)
    const month = ref<number>(1)

    const stopWatch = watchEffect(() => {
      console.log('watchEffect count', count.value)
    })

    watchEffect((onInvalidate) => {
      console.log('demo1', count.value)

      onInvalidate(() => {
        console.log('demo1 clear', count.value)
      })
    })

    watchEffect(() => {
      console.log(`year=${year.value} month=${month.value}`)
    })

    const onAddCount = () => {
      count.value++
      if (count.value > 3) {
        stopWatch()
      }
    }

    const onAddYear = () => {
      year.value++
    }
    const onAddMonth = () => {
      month.value++
    }

    watch(count, (newVal, oldVal) => {
      console.log('watch count', newVal, oldVal)
    })

    watch([year, month], (val, oldVal) => {
      console.log('watch', val, oldVal)
    })

    return {
      count,
      onAddCount,
      year,
      month,
      onAddYear,
      onAddMonth,
    }
  },
}
</script>

<style lang="scss"></style>
