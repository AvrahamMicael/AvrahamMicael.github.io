import { createApp } from 'vue';
import App from './App.vue';
import VueLazyLoad from 'vue3-lazyload';
import i18n from './i18n';

import './defineCustomElements';

import 'bootstrap/js/dist/dropdown';

createApp(App)
    .use(i18n)
    .use(VueLazyLoad, {
      loading: '',
      error: '',
    })
    .mount('#app');
