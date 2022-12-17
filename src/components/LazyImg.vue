<script lang="ts">
const removeSpinner = (img: HTMLImageElement): void => {
  const lazySpinner: ChildNode | null = img.previousSibling;
  lazySpinner?.remove();
};
</script>

<script setup lang="ts">
import { useLazyload } from 'vue3-lazyload';
import { ref } from '@vue/runtime-core';
import { PropType, VueElement } from 'vue';
import { LazyImgLifecycle, SpinnerProps, ImgURL } from '../types';
import { LazySpinner } from '../defineCustomElements';

const { src, lifecycle, error, loading } = defineProps({
    src: {
        type: String as PropType<ImgURL>,
        required: true
    },
    error: String as PropType<ImgURL>,
    errorSize: Number,
    loading: String as PropType<ImgURL>,
    alt: String,
    spinnerProps: {
        type: Object as PropType<SpinnerProps>,
        default: {}
    },
    lifecycle: {
        type: Object as PropType<LazyImgLifecycle>,
        default: ({ spinnerProps, errorSize }: { spinnerProps: SpinnerProps, errorSize: number }) => ({
            loading(img: HTMLImageElement) {
                const lazySpinner: VueElement = new LazySpinner(spinnerProps);
                img.before(lazySpinner);
            },
            loaded(img: HTMLImageElement) {
                removeSpinner(img);
            },
            error(img: HTMLImageElement) {
                removeSpinner(img);
                img.width = errorSize;
                img.height = errorSize;
            }
        })
    }
});

const imgRef = useLazyload(ref<string>(src), { lifecycle, error, loading });
</script>

<template>
    <img
        ref="imgRef"
        :alt="alt"
    />
</template>
