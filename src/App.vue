<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import { onBeforeMount, ref } from '@vue/runtime-core';
import { useI18n } from 'vue-i18n';
import About from './components/sections/About.vue';
import Home from './components/sections/Home.vue';
import Projects from './components/sections/Projects.vue';

const showHeaderAndFooter = ref<boolean>(true);

const toggleHeaderAndFooter = (): void => {
  showHeaderAndFooter.value = !showHeaderAndFooter.value;
};

const { t } = useI18n();

onBeforeMount(() => {
  document.title = t('document-title');
});
</script>

<template>
  <DefaultLayout :show-header-and-footer="showHeaderAndFooter">
    <Home/>
    <About/>
    <Projects @show-popup="toggleHeaderAndFooter"/>
  </DefaultLayout>
</template>
