<template>
  <div :class="$style.module">
    <div>
      <h4>header</h4>
      <slot name="header"/>
    </div>
    <div>
      <h5>content</h5>
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-component',
}
</script>

<style lang="scss" module>
.module {
  :global {
    * {
      margin: 0;
    }
  }
}
</style>
