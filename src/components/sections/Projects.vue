<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { Option, Project, ProjectCategory, OptionChoice } from '../../types';
import { ref } from '@vue/runtime-core';
import projects from '../../projects';
import ProjectCard from '../ProjectCard.vue';
import useBreakpoints from '../../utils/useBreakpoints';
import useImage from '../../utils/useImage';
import LazyImg from '../LazyImg.vue';

const { md, sm_xs } = useBreakpoints();

const emit = defineEmits({
    showPopup() {
        return true;
    },
});

const useProjectOptionsImg = useImage('project-options', true);

const options: Option[] = [
    { name: 'all' },
    { name: 'vue', svg: useProjectOptionsImg('vue.svg') },
    { name: 'node', svg: useProjectOptionsImg('node.svg') },
    { name: 'laravel', svg: useProjectOptionsImg('laravel.svg') },
];

const sortBy = ref<OptionChoice>('all');

const changeSortBy = (option: OptionChoice): void => {
    sortBy.value = option;
};

const showingProjects = computed<Project[]>(() =>
    sortBy.value == 'all'
        ? [...projects.value]
        : [...projects.value].filter((p: Project): boolean => {
            return p.categories.includes(sortBy.value as ProjectCategory);
        })
);

const showingProjectsLength = computed<number>(() => showingProjects.value.length);

const showAllProjects = ref<boolean>(false);
</script>

<template>
    <section class="min-vh-100 d-flex flex-column align-items-center justify-content-center" id="projects">
        <div class="card bg-dark">
            <div class="card-body">
                <h2 class="text-center">
                    {{ $t('projects.h2') }}
                    <span class="d-inline-block">
                    </span>
                </h2>
                <hr class="projects-hr mt-1">
                <div class="row justify-content-around">
                    <div class="col-lg-3 col-md-12 d-flex flex-column position-relative justify-content-center">
                        <button
                            v-for="option in options"
                            :key="option.name"
                            @click="changeSortBy(option.name)"
                            class="option-btn fs-2"
                            :class="{ active: sortBy == option.name }"
                        >
                            <LazyImg
                                v-if="option.svg"
                                :src="option.svg"
                                :alt="`${ $t(`projects.options.${option.name}`) }-option`"
                                :error="useImage('error.svg')"
                                :error-size="30"
                                :spinner-props="{ diameter: 20, translate: `-${ 100 + option.name.length * 16 }%` }"
                                width="30"
                                class="img-fluid me-1"
                            />
                            <span>{{ $t(`projects.options.${option.name}`) }}</span>
                        </button>
                        <div class="vl position-absolute start-100 d-none d-lg-block"/>
                        <hr class="projects-hr d-lg-none">
                    </div>
                    <div class="col-lg-9 col-md-12 row justify-content-evenly position-relative">
                        <ProjectCard
                            v-for="(project, index) in showingProjects"
                            :key="project.title"
                            :project="project"
                            :v-if="index < 3 || sm_xs"
                            @show-popup="emit('showPopup')"
                        />
                        <div v-if="md && showingProjectsLength > 3" class="projects-below-div">
                            <button v-if="!showAllProjects" @click="showAllProjects = true" type="button" class="more-projects-btn d-none d-md-block">
                                <span class="arrows"></span>
                            </button>
                            <Transition name="slide">
                                <div v-show="showAllProjects" class="row justify-content-evenly bg-dark rounded-bottom">
                                    <ProjectCard
                                        v-for="(project, index) in showingProjects"
                                        :key="project.title"
                                        :project="project"
                                        :v-if="index >= 3"
                                        @show-popup="emit('showPopup')"
                                    />
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
