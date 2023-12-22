<template>
    <div>
      <h2 class="tekst">{{ title }}</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.title }} - {{ item.quantity }} stuks
          <input type="number" v-model="item.quantity" @change="updateQuantity(index, item.quantity)">
          <button @click="removeFromCart(index)">{{ remove }}</button>
        </li>
      </ul>
      <button @click="checkout">{{ button }}</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/Winkelmandje';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const router = useRouter();
  
      const cartItems = cartStore.cartItems;
  
      const updateQuantity = (index, quantity) => {
        cartStore.updateQuantity(index, quantity);
      };
  
      const removeFromCart = (index) => {
        cartStore.removeFromCart(index);
      };
  
      const checkout = () => {
        router.push('/Checkoutpage');
      };
  
      return {
        title: "Winkelmandje",
        remove: "Verwijder",
        button: "Afrekenen",
        cartItems,
        updateQuantity,
        removeFromCart,
        checkout,
      };
    },
  };
  </script>  