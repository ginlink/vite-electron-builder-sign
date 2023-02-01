import {createApp} from 'vue';
import App from '@/App.vue';
import i18n from './lang/index';
import {createPinia} from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(pinia);

app.mount('#app');
