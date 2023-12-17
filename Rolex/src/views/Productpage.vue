<template>
    <div>
        <h1>Products</h1>
        <product-card v-for="product in producten" :key="product.id" :product="product" />
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            producten: [],
        };
    },
}
</script>