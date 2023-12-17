<template>
  <nav-component></nav-component>
  <router-view />
  <footer-component></footer-component>
</template>

<script setup>
import NavComponent from '@/components/Navbar.vue';
import FooterComponent from '@/components/Footer.vue';

// export default {
//   components: {
//     NavComponent,
//     FooterComponent,
//   }
// }
</script>

<style scoped></style>
