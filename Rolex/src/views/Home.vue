<template>
    <header>
        "Hello"
    </header>
    <div>
        <RouterView>{{ PopularProducts }}</RouterView>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import PopularProducts from '../components/PopularProducts.vue';

</script>