<template>
  <div>
    <div>
      modelValue: {{ name }}
      <model-value v-model="name" v-model:age="age" v-model:height="height" />
    </div>
    <div>
      <dynamic-heading :level="2">
        Header Leave 2
      </dynamic-heading>
    </div>
    <div>
      <span>SlotDemo</span>
      <slot-demo data-id="s" v-bind="{ 'data-id': 'b' }">slot demo default slot.</slot-demo>
    </div>
    <div>
      <h4>Reactive</h4>
      <reactive/>
    </div>
  </div>
</template>

<script>
import ModelValue from './model-value'
import DynamicHeading from '@/views/change/functional/dynamic-heading'
import SlotDemo from './slot/index'
import Reactive from './reactive'
export default {
  name: 'Change',
  components: {
    ModelValue,
    DynamicHeading,
    SlotDemo,
    Reactive,
  },
  data() {
    return {
      name: '',
      age: 20,
      height: 100,
    }
  },
}
</script>

<style scoped></style>
