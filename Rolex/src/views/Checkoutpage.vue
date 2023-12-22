<template>
    <div>
        <h2 class="tekst">{{ title1 }}</h2>
        <ul>
            <li v-for="(item, index) in cartItems" :key="index">
                {{ item.title }} - {{ item.quantity }} stuks
            </li>
        </ul>
        <h3 class="tekst">{{ title2 }}</h3>
        <form method="get">
            <div>
                <label class="tekst">{{ label1 }}</label>
                <input type="text" required>
            </div>
            <div>
                <label class="tekst">{{ label2 }}</label>
                <input type="text" required>
            </div>
            <div>
                <label class="tekst">{{ label3 }}</label>
                <input type="text" required>
            </div>
        </form>
        <button @click="confirmOrder">{{ button }}</button>
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

        const confirmOrder = () => {
            cartStore.clearCart();
            router.push('/Confirmpage');
        };
        return {
            title1: "Checkout",
            title2: "Adresgegevens:",
            label1: "Straat + huisnummer:  ",
            label2: "Postcode + plaats:  ",
            label3: "Land:  ",
            button: "Bevestigen",
            cartItems,
            confirmOrder,
        };
    },
};
</script>  