<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

defineProps<{ showHeaderAndFooter: boolean }>();
</script>

<template>
    <div class="h-100">
        <Transition>
            <Header v-show="showHeaderAndFooter"/>
        </Transition>
        <main class="min-vh-100 container">
            <slot/>
        </main>
        <Transition>
            <Footer v-show="showHeaderAndFooter"/>
        </Transition>
    </div>
</template>
