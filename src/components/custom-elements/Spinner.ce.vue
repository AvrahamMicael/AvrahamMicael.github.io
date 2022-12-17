<script setup lang="ts">
defineProps({
    diameter: {
        type: Number,
        default: 140,
    },
    translate: {
        type: String,
        default: '-50% 10%',
    },
    largeBorderColor: {
        type: String,
        default: '#8080807e',
    },
    smallBorderColor: {
      type: String,
      default: 'white',
    },
    outerWidthAndHeight: {
        type: String,
        default: 'auto',
    },
    outerLeft: {
        type: String,
        default: 'auto',
    },
});
</script>

<template>
    <div class="out">
        <div class="inner"></div>
    </div>
</template>

<style>
.out
{
width: v-bind(outerWidthAndHeight);
height: v-bind(outerWidthAndHeight);
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 3px;
left: v-bind(outerLeft);
}
.out > .inner
{
position: absolute;
translate: v-bind(translate);
left: 50%;
top: 50%;
width: calc(v-bind(diameter) * 1px);
height: calc(v-bind(diameter) * 1px);
border: 8px solid v-bind(largeBorderColor);
border-radius: 50%;
border-top-color: v-bind(smallBorderColor);
animation: spin 2.5s ease-in-out infinite forwards;
}
@keyframes spin
{
from
{
rotate: 0deg;
}
to
{
rotate: 360deg;
}
}
</style>
