<script setup lang="ts">
import { Img, SpinnerProps } from '../../types';
import useImage from '../../utils/useImage';
import LazyImg from '../LazyImg.vue';

const imagesArrays: Img[][] = [
    [
        { src: 'html.png', alt: 'html' },
        { src: 'css.png', alt: 'css' },
    ],
    [
        { src: 'js.png', alt: 'js' },
        { src: 'php.png', alt: 'php' },
    ],
];

const lazyImgSpinnerProps: SpinnerProps = {
    outerWidthAndHeight: '200px'
};

const useAboutSectionImg = useImage('about-section', true);
</script>

<template>
    <section class="min-vh-100" id="about">
        <div class="min-vh-100 w-100 row justify-content-center ms-md-3">
            <div class="col-md-4 mx-auto my-auto d-flex justify-content-center align-items-center">
                <div v-for="(images, i) in imagesArrays" :key="i">
                    <LazyImg
                        v-for="image in images"
                        :key="image.src"
                        :alt="image.alt"
                        :src="useAboutSectionImg(image.src)"
                        class="img-fluid max-w-240 max-w-xs_sm-200"
                        :spinner-props="lazyImgSpinnerProps"
                        :error="useImage('error.svg')"
                        :error-size="200"
                    />
                </div>
            </div>
            <div class="col-md-4 col-12 mx-xl-auto me-lg-auto ms-lg-0 ms-auto my-auto">
                <h2>{{ $t('about.h2') }}</h2>
                <p class="fs-5">
                    {{ $t('about.p[0]') }}
                </p>
                <p class="mb-0 fs-5">
                    {{ $t('about.p[1]') }}
                </p>
            </div>
        </div>
    </section>
</template>
