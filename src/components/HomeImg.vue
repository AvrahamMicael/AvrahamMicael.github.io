<script setup lang="ts">
import { ref } from '@vue/runtime-core';
import { LazyImgLifecycle, ImgURL } from '../types';
import LazyImg from './LazyImg.vue';

const spanRef = ref<HTMLSpanElement>();

const src: ImgURL = 'https://avatars.githubusercontent.com/u/101893955?s=300&v=4';

const lifecycle: LazyImgLifecycle = {
    loaded() {
        spanRef.value?.remove();
    },
    error() {
        if(!spanRef.value) return;
        spanRef.value.className = 'error';
        spanRef.value.textContent = 'image cannot be loaded';
    }
};
</script>

<template>
    <div class="box-300 d-flex position-relative">
        <span ref="spanRef" class="ripples"></span>
        <LazyImg
            :src="src"
            :lifecycle="lifecycle"
            alt="Me"
            class="rounded-circle img-fluid border border-5 border-dark bg-dark mx-auto my-auto box-300"
        />
    </div>
</template>

<style scoped>
div
{
  overflow: hidden;
  border-radius: 50%;
}
span
{
  translate: -50% -50%;
  left: 50%;
  top: 50%;
  position: absolute;
}
span.ripples
{
  border-radius: 50%;
  background-color: white;
  opacity: .1;
  animation: ripples infinite ease-out 1.7s;
}
span.error
{
  white-space: pre;
  color: red;
  text-transform: uppercase;
}
@keyframes ripples
{
  from
  {
    width: 0;
    height: 0;
  }
  to
  {
    width: 310px;
    height: 310px;
  }
}
</style>
