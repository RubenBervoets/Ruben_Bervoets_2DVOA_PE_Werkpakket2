<template>
    <div class="products">
        <div class="container">
            <h1 class="lg-title">Rolex watches</h1>
            <p class="text-light">Bekijk de prestigieuze en uiterst nauwkeurige uurwerken uit de Rolex-collectie. Rolex
                biedt een ruim assortiment van Oyster Perpetual- en Cellini-horloges voor aan elke pols. Ontdek de
                uitgebreide selectie Rolex-horloges voor een perfecte combinatie van stijl en functionaliteit.</p>
            <product-card v-for="product in producten" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
    components: {
        ProductCard,
    },
    inject: ['producten'],
}
</script>