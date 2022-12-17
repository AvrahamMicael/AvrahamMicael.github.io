import { LocaleAbbrev } from "../types";

const getLocale = (): LocaleAbbrev => ['pt-BR', 'en-US'].includes(localStorage.locale)
    ? localStorage.locale
    : ['pt-BR', 'pt'].includes(navigator.language)
        ? 'pt-BR'
        : 'en-US';

export default getLocale;