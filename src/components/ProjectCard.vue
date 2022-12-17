<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from '../types';
import { ref } from '@vue/runtime-core';
import ProjectContent from './ProjectContent.vue';
import LazyImg from './LazyImg.vue';
import useImage from '../utils/useImage';

defineProps({
    project: {
        type: Object as PropType<Project>,
        required: true,
    },
    class: [String, Object, Array],
    vIf: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits({
    showPopup() {
        return true;
    },
});

const showPopup = ref<boolean>(false);

const togglePopupScrollAndFooter = (): void => {
    emit('showPopup');
    showPopup.value = !showPopup.value;
    document.body.style.overflowY = showPopup.value
        ? 'hidden'
        : 'visible';
};

const useProjectOptionsImg = useImage('project-options', true);
</script>


<template>
    <div
        v-if="vIf"
        @click="togglePopupScrollAndFooter"
        class="project-card"
        :class="class"
        role="button"
    >
        <LazyImg
            :src="project.image"
            alt="project image"
            :error="useImage('error.svg')"
            :error-size="140"
            class="card-img-top my-2"
        />
        <div class="text-center">
            <span
                v-for="category in project.categories"
                :key="category"
                class="badge rounded-pill bg-light text-capitalize mx-1"
            >
                <LazyImg
                    :src="useProjectOptionsImg(`${category}.svg`)"
                    :alt="category"
                    :error="useImage('error.svg')"
                    :error-size="20"
                    :spinner-props="{ diameter: 10, translate: '-50% -10%' }"
                    width="20"
                    class="img-fluid"
                />
            </span>
        </div>
        <div class="card-body pt-1">
            <h5 class="card-title text-center">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
    <teleport to="body">
        <Transition>
            <div @click.self="togglePopupScrollAndFooter" v-show="showPopup" class="popup-outer flex-column">
                <div class="popup-inner max-w-md-100p">
                    <ProjectContent
                        v-for="content in project.content"
                        :key="content.value"
                        :content="content"
                    />
                </div>
                <div class="mt-3">
                    <a
                        :href="project.repoLink"
                        target="_blank"
                        class="option-btn fs-4"
                    >
                        <img v-lazy="{ src: useImage('github.svg') }" width="40">
                        {{ $t('projects.view-github') }}
                    </a>
                </div>
            </div>
        </Transition>
    </teleport>
</template>
