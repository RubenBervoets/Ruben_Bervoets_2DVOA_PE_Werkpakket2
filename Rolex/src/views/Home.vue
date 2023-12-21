<template>
    <header>
        <img class="jumbotron" src="assets/RolexJumbotron.jpg" alt="Foto Rolex">
    </header>
    <PopularProducts />
</template>

<script>
import PopularProducts from "../components/PopularProducts.vue";

export default {
    components: {
        PopularProducts,
    },
};
</script>