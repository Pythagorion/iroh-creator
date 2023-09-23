import { createI18n } from "vue-i18n";
import de from './locales/de.json';

export const LocaleMap = {
    'Deutsch': 'de',
};

const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'de',
    messages: {
        de,
    }
});

export async function setI18nLanguage(locale: string) {
    if (i18n.global.locale.value === locale) {
        return;
    }

    if (!Object.keys(LocaleMap).includes(locale)) {
        return;
    }

    if (!i18n.global.availableLocales.includes(locale as any)) {
        await loadLocaleMessage(locale);
    }

    i18n.global.locale = locale as any;
    document.querySelector('html')!.setAttribute('lang', locale);
}

async function loadLocaleMessage(locale: string) {
    const messages = await import(`./locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
}

export default i18n;