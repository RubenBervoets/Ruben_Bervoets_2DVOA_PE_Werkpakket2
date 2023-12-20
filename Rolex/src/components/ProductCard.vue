<template>
    <div class="product-items">
        <div class="product">
            <div class="product-content">
                <div class="product-img">
                    <img :src="product.image" alt="Foto kan niet worden geladen">
                </div>
                <div class="product-btns">
                    <button type="button" class="btn-more"><span><i class="fas fa-plus"></i></span> Bekijk model
                    </button>
                    <button type="button" class="btn-cart"><span><i class="fas fa-shopping-cart"></i></span> In winkelwagen
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-info-top">
                    <h2 class="product-name">{{ product.title }}</h2>
                </div>
                <!-- <a class="product-description">Oyster, 41mm, Oystersteel</a> -->
                <a class="product-description">{{ product.details.braceletMaterial }}, {{ product.details.case }}, {{
                    product.details.caseMaterial }}</a>
                <p class="product-price">{{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style scoped></style>