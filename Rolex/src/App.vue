<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
import productData from "../producten.json";

export default {
  components: {
    Navigation,
    Footer,
  },
  provide() {
    return {
      producten: productData
    }
  }
}
</script>

<style scoped>
</style>