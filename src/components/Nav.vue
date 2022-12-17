<script setup lang="ts">
import { ref, onMounted } from '@vue/runtime-core';
import { Nav, NavItem, NavHash, isNavHash } from '../types';

const nav = ref<Nav>([
    { name: 'Home', href: '#home', isActive: true },
    { name: 'About', href: '#about', isActive: false },
    { name: 'Projects', href: '#projects', isActive: false },
]);

const toggleActive = (activated_hash: NavHash): void => {
    nav.value.forEach((nav_item: NavItem): NavItem => {
        nav_item.isActive = nav_item.href == activated_hash;
        return nav_item;
    });
};

const onHashChange = (): void => {
    if(isNavHash(location.hash))
    {
        const elementId: string = location.hash.replace('#', '');
        document.getElementById(elementId)?.scrollIntoView;
    }
};

const observerCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0)
        {
            const elementId: string = entry.target.getAttribute('id')!;
            toggleActive(`#${elementId}` as NavHash);
        }
    });
};

const observerOptions: IntersectionObserverInit = {
    rootMargin: '-30% 0px -60%',
};

addEventListener('hashchange', onHashChange);

onMounted(() => {
    onHashChange();
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('main section').forEach(section => {
        observer.observe(section);
    });
});
</script>

<template>
    <nav class="nav nav-pills">
        <li v-for="item in nav" :key="item.name" class="nav-item">
            <a
                :href="item.href"
                class="nav-link"
                :class="{ active: item.isActive }"
            >
                {{ $t(`nav.${item.name}`) }}
            </a>
        </li>
    </nav>
</template>
