<template>
    <div class="products">
        <div class="container">
            <h1 class="lg-title">Rolex watches</h1>
            <p class="text-light">Bekijk de prestigieuze en uiterst nauwkeurige uurwerken uit de Rolex-collectie. Rolex
                biedt een ruim assortiment van Oyster Perpetual- en Cellini-horloges voor aan elke pols. Ontdek de
                uitgebreide selectie Rolex-horloges voor een perfecte combinatie van stijl en functionaliteit.</p>
            <!-- <product-card v-for="product in producten" :key="product.id" :product="product" /> -->
            <product-card v-for="(product, index) in paginatedProducts" :key="product.id" :product="product" />
            <div class="pagination">
                <button @click="prevPage" :disabled="currentPage === 1">Vorige</button>
                <span>{{ currentPage }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages">Volgende</button>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

// export default {
//     components: {
//         ProductCard,
//     },
//     inject: ['producten'],
// }

export default {
    components: {
        ProductCard,
    },
    inject: ['producten'],
    data() {
        return {
            productsPerPage: 8,
            currentPage: 1,
        };
    },
    computed: {
        totalProducts() {
            return this.producten.length;
        },
        totalPages() {
            return Math.ceil(this.totalProducts / this.productsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.productsPerPage;
            const end = start + this.productsPerPage;
            return this.producten.slice(start, end);
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
    },
};
</script>