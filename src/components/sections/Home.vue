<script setup lang="ts">
import HomeImg from '../HomeImg.vue';
</script>

<template>
    <section class="min-vh-100 d-flex flex-column align-items-center justify-content-center" id="home">
        <HomeImg/>
        <h2 class="mt-2">{{ $t('home.h2') }}</h2>
        <p class="text-capitalize mb-0">{{ $t('home.p') }}</p>
    </section>
</template>
