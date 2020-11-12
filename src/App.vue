<template>
  <div id="nav">
    <router-link to="/setup">Setup</router-link>
    <router-link to="/change">Change</router-link>
    <router-link to="/ts">Ts</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

#nav a {
  margin: 0 10px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
