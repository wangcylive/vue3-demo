<template>
  <div>
    <h4>Inject</h4>
    <div>Location: {{ location }} <button @click="onChangeLocation">Change Location</button></div>
    <div>Geolocation: {{ geolocation?.latitude }},{{ geolocation?.longitude }}</div>
  </div>
</template>

<script lang="ts">
import { inject, Ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'InjectComponent',
  setup() {
    const location = inject<Ref<string>>('location')
    const geolocation = inject<{ longitude: number; latitude: number }>('geolocation')
    const updateLocation = inject<any>('updateLocation')

    const onChangeLocation = () => {
      updateLocation('BeiJing')
    }

    return {
      location,
      onChangeLocation,
      geolocation,
    }
  },
})
</script>

<style lang="scss"></style>
