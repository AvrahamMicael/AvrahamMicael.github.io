<script setup lang="ts">
import { PropType } from 'vue';
import { ImgURL, ProjectContent } from '../types';
import LazyImg from './LazyImg.vue';

defineProps({
    content: {
        type: Object as PropType<ProjectContent>,
        required: true,
    },
});
</script>

<template>
    <p v-if="content.type == 'text'" v-html="content.value"/>
    <LazyImg
        v-else
        :src="(content.value as ImgURL)"
        class="img-fluid mb-3"
        :spinner-props="{ outerWidthAndHeight: '200px', outerLeft: '50%', translate: '-110% -50%' }"
    />
</template>

<style lang="css" scoped>
p:deep() > a
{
    color: rgba(192, 192, 192, 0.842);
}
</style>
