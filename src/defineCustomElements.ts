import { defineCustomElement } from 'vue';
import Spinner from './components/custom-elements/Spinner.ce.vue';

export const LazySpinner = defineCustomElement(Spinner);

customElements.define('lazy-spinner', LazySpinner);
