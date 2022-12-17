import { computed } from '@vue/reactivity';
import { Breakpoints } from '../types';
import { ref } from '@vue/runtime-core';

const useBreakpoints = (): Breakpoints => {
    const windowWidth = ref<number>(window.innerWidth);
    window.addEventListener('resize', () => windowWidth.value = window.innerWidth);

    const xs = computed<boolean>((): boolean => windowWidth.value < 576);
    const sm = computed<boolean>((): boolean => windowWidth.value >= 576);
    const md = computed<boolean>((): boolean => windowWidth.value >= 768);
    const lg = computed<boolean>((): boolean => windowWidth.value >= 992);
    const xl = computed<boolean>((): boolean => windowWidth.value >= 1200);
    const xxl = computed<boolean>((): boolean => windowWidth.value >= 1400);

    const sm_xs = computed<boolean>((): boolean => windowWidth.value <= 768);
    const md_xs = computed<boolean>((): boolean => windowWidth.value <= 992);
    const lg_xs = computed<boolean>((): boolean => windowWidth.value <= 1200);
    const xl_xs = computed<boolean>((): boolean => windowWidth.value <= 1400);
    
    return { xs, sm, md, lg, xl, xxl, sm_xs, md_xs, lg_xs, xl_xs };
};

export default useBreakpoints;
