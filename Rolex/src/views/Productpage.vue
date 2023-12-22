<template>
    <div class="products">
        <div class="container">
            <h1 class="lg-title">{{ title }}</h1>
            <p class="text-light">{{ text }}</p>
            <div class="filter-container">
                <ul class="filter-options">
                    <li>
                        <span class="filter-label">{{ filterLabel1 }}</span>
                        <ul>
                            <li v-for="material in materials" :key="material">
                                <label>
                                    <input type="checkbox" :name="material" :value="material" v-model="selectedMaterials" />
                                    {{ material }}
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span class="filter-label">{{ filterLabel2 }}</span>
                        <ul class="column">
                            <li v-for="size in caseSizes" :key="size">
                                <label>
                                    <input type="checkbox" :name="size" :value="size" v-model="selectedCaseSizes" />
                                    {{ size }}
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button @click="resetFilters" class="reset-button">{{ resetButton }}</button>
            </div>
            <div class="product-items">
                <product-card v-for="(product, index) in paginatedProducts" :key="product.id" :product="product" />
            </div>
            <div>
                <div class="pagination">
                    <button @click="prevPage" :disabled="currentPage === 1">Vorige</button>
                    <button @click="nextPage" :disabled="currentPage === totalPages">Volgende</button>
                </div>
            </div>
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
    data() {
        return {
            title: "Rolex watches",
            text: "Bekijk de prestigieuze en uiterst nauwkeurige uurwerken uit de Rolex-collectie. Rolex biedt een ruim assortiment van Oyster Perpetual- en Cellini-horloges voor aan elke pols. Ontdek de uitgebreide selectie Rolex-horloges voor een perfecte combinatie van stijl en functionaliteit.",
            filterLabel1: "Type materiaal:",
            filterLabel2: "Grootte kast:",
            resetButton: "Reset",
            productsPerPage: 8,
            currentPage: 1,
            materials: ["Oystersteel", "Yellow gold", "White gold", "Platinum", "Everose gold"],
            caseSizes: ["28 mm", "36 mm", "37 mm", "39 mm", "40 mm", "41 mm", "42 mm", "43 mm", "44 mm"],
            selectedMaterials: [],
            selectedCaseSizes: [],
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
        filteredProducts() {
            return this.producten.filter((product) => {
                const materialFilter = this.selectedMaterials.length === 0 || this.selectedMaterials.includes(product.details.caseMaterial);
                const sizeFilter = this.selectedCaseSizes.length === 0 || this.selectedCaseSizes.includes(product.details.case);
                return materialFilter && sizeFilter;
            });
        },
        totalPages() {
            return Math.ceil(this.filteredProducts.length / this.productsPerPage);
        },
        paginatedProducts() {
            const start = (this.currentPage - 1) * this.productsPerPage;
            const end = start + this.productsPerPage;
            return this.filteredProducts.slice(start, end);
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
        resetFilters() {
            // Reset selected filters
            this.selectedMaterials = [];
            this.selectedCaseSizes = [];
            // Reset the current page to 1 when filters are reset
            this.currentPage = 1;
        },
    },
};
</script>