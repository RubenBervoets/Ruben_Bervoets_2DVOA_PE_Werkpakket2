import '../scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue';
import router from './router/index';
import stores from './stores/Store.js';

const app = createApp(App)

app.use(router)

app.use(stores);

app.mount('#app')
