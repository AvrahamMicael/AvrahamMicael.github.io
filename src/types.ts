import { ComputedRef } from "vue";

export type NavHash = '#home' | '#about' | '#projects' | '#skills' | '#contact';

export interface NavItem {
    name: string,
    href: NavHash,
    isActive: boolean,
};

export type Nav = NavItem[];

export type OptionChoice = 'all' | 'laravel' | 'vue' | 'node';

export interface Option {
    name: OptionChoice,
    svg?: ImgURL,
};


export interface ProjectContent {
    type: 'text' | 'image',
    value: string | ImgURL,
};

export type ProjectCategory = 'laravel' | 'vue' | 'php' | 'node';

export interface Project {
    image: ImgURL,
    categories: ProjectCategory[],
    title: string,
    repoLink: string,
    description: string,
    content: ProjectContent[],
};

export type LocaleAbbrev = 'pt-BR' | 'en-US';

export interface Locale {
    name: string,
    abbr: LocaleAbbrev,
    alt: string,
    flag: ImgURL,
};

export interface LinkWithImage {
    href: string,
    alt?: string,
    src: string,
};

export interface Img {
    src: string,
    alt?: string,
};

export type Breakpoints = {
    xs: ComputedRef<boolean>,
    sm: ComputedRef<boolean>,
    md: ComputedRef<boolean>,
    lg: ComputedRef<boolean>,
    xl: ComputedRef<boolean>,
    xxl: ComputedRef<boolean>,
    sm_xs: ComputedRef<boolean>,
    md_xs: ComputedRef<boolean>,
    lg_xs: ComputedRef<boolean>,
    xl_xs: ComputedRef<boolean>,
};


enum LazyImgLifecycleEnum {
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error"
};

export type LazyImgLifecycle = {
    [x in LazyImgLifecycleEnum]?: (el?: HTMLElement) => void;
};


export type SpinnerProps = {
  diameter?: Number,
  translate?: String,
  largeBorderColor?: String,
  smallBorderColor?: String,
  outerWidthAndHeight?: String,
  outerLeft?: String,
};



export type ImgURL = `${string}/${string}`;


export const isNavHash = (hash: string): hash is NavHash => {
    return ['#home', '#about', '#projects', '#skills', '#contact'].includes(hash);
}
