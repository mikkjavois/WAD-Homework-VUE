<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign Up</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
  font-size: large;
}

body {
  margin: 0;
}

nav {
  padding: 30px;
  background-color: darkcyan;
  color: white;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: greenyellow;
}
</style>