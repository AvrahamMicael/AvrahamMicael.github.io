import { Project } from './types';
import i18n from './i18n';
import { computed } from '@vue/reactivity';
import useImage from './utils/useImage';

const { t } = i18n.global;

const useProjectsImg = useImage('projects', true);

const projects = computed<Project[]>(() => [
    {
        image: useProjectsImg('multiplayer_snake/logo.svg'),
        categories: ['node'],
        title: 'Multiplayer Snake',
        repoLink: 'https://github.com/AvrahamMicael/multiplayer-snake',
        description: t('projects.multiplayer-snake.description'),
        content: [
            { type: 'image', value: useProjectsImg('multiplayer_snake/game.png') },
            { type: 'text', value: t('projects.multiplayer-snake.content-text[0]') },
            { type: 'text', value: t('projects.multiplayer-snake.content-text[1]') },
            { type: 'text', value: t('projects.multiplayer-snake.content-text[2]') },
        ],
    },
    {
        image: useProjectsImg('chatts/logo.svg'),
        categories: ['node'],
        title: 'Chatts',
        repoLink: 'https://github.com/AvrahamMicael/chatts',
        description: t('projects.chatts.description'),
        content: [
            { type: 'image', value: useProjectsImg('chatts/room.png') },
            { type: 'text', value: t('projects.chatts.content-text[0]') },
            { type: 'text', value: t('projects.chatts.content-text[1]') },
            { type: 'text', value: t('projects.chatts.content-text[2]') },
        ],
    },
    {
        image: useProjectsImg('lingo/logo.svg'),
        categories: ['vue', 'laravel'],
        title: 'Lingo',
        repoLink: 'https://github.com/AvrahamMicael/lingo',
        description: t('projects.lingo.description'),
        content: [
            { type: 'image', value: useProjectsImg('lingo/home.png') },
            { type: 'text', value: t('projects.lingo.content-text[0]') },
            { type: 'text', value: t('projects.lingo.content-text[1]') },
            { type: 'text', value: t('projects.lingo.content-text[2]') },
            { type: 'text', value: t('projects.lingo.content-text[3]') },
            { type: 'text', value: t('projects.lingo.content-text[4]') },
            { type: 'text', value: t('projects.lingo.content-text[5]') },
            { type: 'text', value: t('projects.lingo.content-text[6]') },
            { type: 'text', value: t('projects.lingo.content-text[7]') },
            { type: 'text', value: t('projects.lingo.content-text[8]') },
            { type: 'text', value: t('projects.lingo.content-text[9]') },
        ],
    },
    {
        image: useProjectsImg('blog/logo.png'),
        categories: ['vue', 'laravel'],
        title: 'Blog',
        repoLink: 'https://github.com/AvrahamMicael/blog',
        description: t('projects.blog.description'),
        content: [
            { type: 'image', value: useProjectsImg('blog/home.png') },
            { type: 'text', value: t('projects.blog.content-text[0]') },
            { type: 'text', value: t('projects.blog.content-text[1]') },
            { type: 'text', value: t('projects.blog.content-text[2]') },
        ],
    },
    {
        image: useProjectsImg('eCommerce/logo.png'),
        categories: ['laravel'],
        title: 'eCommerce',
        repoLink: 'https://github.com/AvrahamMicael/eCommerce',
        description: t('projects.eCommerce.description'),
        content: [
            { type: 'image', value: useProjectsImg('eCommerce/product.png') },
            { type: 'text', value: t('projects.eCommerce.content-text[0]') },
            { type: 'text', value: t('projects.eCommerce.content-text[1]') },
        ],
    },
    {
        image: useProjectsImg('manga_site/logo.svg'),
        categories: ['laravel'],
        title: 'Manga Site',
        repoLink: 'https://github.com/AvrahamMicael/mangas-site',
        description: t('projects.manga-site.description'),
        content: [
            { type: 'image', value: useProjectsImg('manga_site/main.png') },
            { type: 'text', value: t('projects.manga-site.content-text[0]') },
            { type: 'text', value: t('projects.manga-site.content-text[1]') },
            { type: 'text', value: t('projects.manga-site.content-text[2]') },
        ],
    },
]);

export default projects;
