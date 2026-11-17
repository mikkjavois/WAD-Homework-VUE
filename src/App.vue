<template>
  <Header />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Header, Footer }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
  font-size: large;
}

.main-content {
  flex: 1;
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