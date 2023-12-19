<template>
    <div class="product">
        <div class="product-content">
            <div class="product-img">
                <img src="product.image" alt="Foto kan niet worden geladen">
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
                <h2 class="product-name">DATEJUST 41</h2>
            </div>
            <a class="product-description">Oyster, 41mm, Oystersteel</a>
            <p class="product-price">€ 7 500.00</p>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['producten'],
}
</script>

<style scoped></style>