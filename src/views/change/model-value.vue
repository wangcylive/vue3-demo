<template>
  <div>
    <div>
      modelValue: {{ modelValue }}
      <button @click="onChange">Change ModelValue</button>
    </div>
    <div>Age: {{ age }} <button @click="onChangeAge">Change Age</button></div>
    <div>Height: {{ height }} <button @click="onChangeHeight">Change Height</button></div>
  </div>
</template>

<script>
export default {
  name: 'ModelValue',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onChange() {
      this.$emit('update:modelValue', new Date().toTimeString())
    },
    onChangeAge() {
      this.$emit('update:age', this.age + 1)
    },
    onChangeHeight() {
      this.$emit('update:height', this.height + 1)
    },
  },
}
</script>

<style scoped></style>
