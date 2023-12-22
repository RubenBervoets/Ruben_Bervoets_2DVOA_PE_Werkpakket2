<template>
    <div class="products">
        <div class="container">
            <h1 class="lg-title">{{ title }}</h1>
            <p class="text-light">{{ text }}</p>
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
    data() {
        return {
        title: "Onze bestsellers",
        text: "Deze horloges vallen het beste in de smaak bij onze gebruikers."
        }
    },
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