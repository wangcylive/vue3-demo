<template>
  <div>
    <h4>Provide</h4>
    <my-component />
  </div>
</template>

<script lang="ts">
import { provide, ref, reactive, readonly } from 'vue'
import MyComponent from '@/views/setup/inject/component.vue'
export default {
  name: 'index',
  components: {
    MyComponent,
  },
  setup() {
    const location = ref<string>('North Pole')
    const geolocation = reactive<{ longitude: number; latitude: number }>({
      longitude: 90,
      latitude: 135,
    })

    const updateLocation = (val: string) => {
      location.value = val
    }

    provide('location', readonly(location))
    provide('geolocation', readonly(geolocation))
    provide('updateLocation', updateLocation)
  },
}
</script>

<style lang="scss"></style>
