<template>
    <div class="products">
        <div class="container">
            <h1 class="lg-title">Onze bestsellers</h1>
            <p class="text-light">Deze horloges vallen het beste in de smaak bij onze gebruikers.</p>
            <div class="product-items">
                <div v-for="(product, index) in popularProducts" :key="product.id">
                    <product-card :product="product" />
                </div>
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
            return this.producten
                .slice()
                .sort((a, b) => b.stock - a.stock)
                .slice(0, 4);
        },
    },
};
</script>