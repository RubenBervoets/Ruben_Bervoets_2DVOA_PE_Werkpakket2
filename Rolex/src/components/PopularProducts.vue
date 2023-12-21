<template>
    <div class="popular-products">
        <h2>Popular Products</h2>
        <div class="popular-products-list">
            <div v-for="(product, index) in popularProducts" :key="product.id" class="popular-product">
                <!-- Use your existing ProductCard component or replicate the structure -->
                <product-card :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
    components: {
        ProductCard,
    },
    inject: ['producten'],
    computed: {
        popularProducts() {
            // Sort products by stock in descending order and take the top 4
            return this.producten
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => b.stock - a.stock)
                .slice(0, 4);
        },
    },
};
</script>