import { createI18n } from 'vue-i18n'
import enUs from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';
import getLocale from './utils/getLocale';

type MessageSchema = typeof enUs;

const i18n = createI18n<[MessageSchema], 'en-US' | 'pt-BR'>({
    legacy: false,
    locale: getLocale(),
    messages: {
        'en-US': enUs,
        'pt-BR': ptBR,
    },
})

export default i18n;
