<template>
    <header>
        homepagina
    </header>
    <div>
        <RouterView>{{ PopularProducts }}</RouterView>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';
import PopularProducts from '../components/PopularProducts.vue';
</script>