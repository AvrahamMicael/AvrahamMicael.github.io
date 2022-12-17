<script setup lang="ts">
import { LinkWithImage } from '../types';
import useImage from '../utils/useImage';
import LazyImg from './LazyImg.vue';

const copyToClipBoard = async (ev: Event): Promise<void> => (await import('../utils/copyToClipboard')).default(ev);

const links: LinkWithImage[] = [
    { href: 'https://github.com/AvrahamMicael', alt: 'Github Profile', src: 'github.svg' },
    { href: 'https://www.linkedin.com/in/avraham-micael', alt: 'Linkedin Profile', src: 'linkedin.svg' },
];
</script>

<template>
    <footer class="fixed-bottom bg-dark bg-opacity-50">
        <div class="container d-flex justify-content-between">
            <div class="d-flex flex-column justify-content-center">
                <div>{{ $t('footer.contact-email') }} <span @click="copyToClipBoard" role="button" class="text-decoration-underline">avrahammicael@protonmail.com</span></div>
                <div>{{ $t('footer.background-image') }} <a href="https://unsplash.com/@hasanalmasi" target="_blank" class="link-light">Hasan Almasi</a></div>
                <div>
                    {{ $t('footer.icons[0]') }}
                    <a target="_blank" href="https://icons8.com" class="link-light">Icons8</a>
                    {{ $t('footer.icons[1]') }}
                    <a target="_blank" href="https://commons.wikimedia.org/wiki/Main_Page" class="link-light">Wikimedia Commons</a>
                </div>
            </div>
            <div class="d-flex flex-sm-row flex-column justify-content-center justify-content-end-sm">
                <a
                    v-for="link in links"
                    :key="link.src"
                    :href="link.href"
                    target="_blank"
                    class="text-decoration-none"
                >
                    <LazyImg
                        :src="useImage(link.src)"
                        :alt="link.alt"
                        :error="useImage('error.svg')"
                        :error-size="72"
                        :spinner-props="{ diameter: 50 }"
                        width="72"
                        class="img-fluid"
                    />
                </a>
            </div>
        </div>
    </footer>
</template>
