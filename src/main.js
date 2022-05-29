import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-dark-blue/theme.css';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.mount('#app')
