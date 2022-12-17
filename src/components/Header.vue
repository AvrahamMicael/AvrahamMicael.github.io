<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue';
import Nav from './Nav.vue';
</script>

<template>
    <header class="bg-dark bg-opacity-50 fixed-top">
        <div class="container">
            <div class="d-flex flex-wrap justify-content-center py-3 container">
                <a href="#home" class="d-flex align-items-center mb-3 mb-sm-0 me-sm-auto text-decoration-none text-light">
                    <span class="fs-4 text-uppercase gradient-text">Avraham Micael &nbsp;</span>
                </a>
                <Nav/>
                <LocaleChanger/>
            </div>
        </div>
    </header>
</template>
