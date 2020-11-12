<template>
  <div>
    <div class="setup-nav">
      <router-link to="base">Base</router-link>
      <router-link to="basic-reactivity">BaseReactivity</router-link>
      <router-link to="watch">Watch</router-link>
      <router-link to="render">Render</router-link>
      <router-link to="inject">Inject</router-link>
      <router-link to="ref">Ref</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'SetupDemo',
}
</script>

<style lang="scss">
.setup-nav {
  display: flex;
  justify-content: center;
  > a {
    margin: 0 10px;
  }
}
</style>
