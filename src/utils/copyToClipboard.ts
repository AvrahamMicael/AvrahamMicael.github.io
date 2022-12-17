import i18n from '../i18n';

const { t } = i18n.global;

const copyToClipBoard = (ev: Event): void => {
    const span = ev.target as HTMLSpanElement;
    navigator.clipboard.writeText(span.innerText);
    alert(t('functions.copy-to-clipboard.copied'));
};

export default copyToClipBoard;
