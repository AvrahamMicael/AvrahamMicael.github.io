<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ImgURL, Locale } from '../types';
import { computed } from '@vue/reactivity';
import useImage from '../utils/useImage';
import LazyImg from './LazyImg.vue';

const useFlagsImg = useImage('flags', true);

const locales: Locale[] = [
    { name: 'English', abbr: 'en-US', flag: useFlagsImg('US_flag.svg'), alt: 'US flag' },
    { name: 'Português', abbr: 'pt-BR', flag: useFlagsImg('BR_flag.svg'), alt: 'BR flag' },
];

const { locale: currentLocale, t } = useI18n();

const changeCurrentLocale = (locale: Locale): void => {
    currentLocale.value = localStorage.locale = locale.abbr;
    document.title = t('document-title');
};

const currentLocaleFlag = computed<ImgURL>(() => locales.find((loc: Locale): boolean => loc.abbr == currentLocale.value)!.flag)
</script>

<template>
    <div class="dropdown my-auto mx-3 py-2 py-md-0">
        <img v-lazy="{ src: currentLocaleFlag, error: useImage('error.svg') }" :alt="currentLocale" class="rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false" width="20">
        <ul class="dropdown-menu text-decoration-none text-dark" aria-labelledby="dropdownMenuLocale">
            <li v-for="locale in locales" :key="locale.name">
                <button @click="changeCurrentLocale(locale)" class="dropdown-item">
                    <LazyImg
                        :src="locale.flag"
                        :error="useImage('error.svg')"
                        :error-size="20"
                        :spinner-props="{ diameter: 5, translate: '-240% 30%' }"
                        class="rounded-circle me-1"
                        :alt="locale.alt"
                        width="20"
                    />
                    {{ locale.name }}
                </button>
            </li>
        </ul>
    </div>
</template>
