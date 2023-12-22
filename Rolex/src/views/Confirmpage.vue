<template>
    <div>
      <h2 class="tekst">{{ title1 }}</h2>
      <p class="tekst">{{ confirmation }}</p>
      <h3 class="tekst">{{ title2 }}</h3>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.title }} - {{ item.quantity }} stuks
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/Winkelmandje';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const cartItems = cartStore.cartItems;
      return {
        title1: "Bevestiging",
        title2: "Bestelde producten:",
        confirmation: "Bedankt voor je bestelling!",
        cartItems,
      };
    },
  };
  </script>  