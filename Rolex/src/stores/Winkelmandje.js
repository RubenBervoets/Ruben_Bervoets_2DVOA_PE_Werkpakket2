import { defineStore } from 'pinia';

export const useCartStore = defineStore('Winkelmandje', {
  state: () => ({
    cartItems: [],
  }),

  actions: {
    addToCart(product) {
      this.cartItems.push({ ...product, quantity: 1 });
    },

    updateQuantity(index, quantity) {
      this.cartItems[index].quantity = quantity;
    },

    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },

    clearCart() {
      this.cartItems = [];
    },
  },
});