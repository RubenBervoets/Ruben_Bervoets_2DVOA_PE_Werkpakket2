<template>
  <div id="app">
  <Navigation></Navigation>
  <router-view />
  <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style scoped>
</style>