<template>
    <div class="product-items">
        <div class="product">
            <div class="product-content">
                <div class="product-img">
                    <img :src="product.image" alt="Foto kan niet worden geladen">
                </div>
                <div class="product-btns">
                    <router-link :to="{ name: 'productDetail', params: { id: product.id } }">
                        <button type="button" class="btn-more">
                            <span><i class="fas fa-plus"></i></span> {{ button1 }}
                        </button>
                    </router-link>
                    <button type="button" class="btn-cart"><span><i class="fas fa-shopping-cart"></i></span> {{ button2 }}
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-info-top">
                    <h2 class="product-name">{{ product.title }}</h2>
                </div>
                <a class="product-description">{{ product.details.braceletMaterial }}, {{ product.details.case }}, {{
                    product.details.caseMaterial }}</a>
                <p class="product-price">{{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            button1: "Bekijk model",
            button2: "In winkelwagen"
        }
    },
    props: {
        product: Object
    }
}
</script>

<style scoped></style>