import {createI18n} from 'vue-i18n';
import {LANG_VALUE} from '@/common/enum';
import zhHans from './zh-Hans';
import en from './en';
import useAppStore from '@/stores/app';
import {storeToRefs} from 'pinia';

const LANGUAGE = 'store-language';

export function getLanguage() {
  const chooseLanguage = localStorage.getItem(LANGUAGE);
  if (chooseLanguage) return chooseLanguage;

  // 如果没有选择语言
  const language = navigator.language.toLowerCase();
  const locales = [LANG_VALUE.En, LANG_VALUE.Zh];
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return LANG_VALUE.Zh;
}

export function setLocale(lang: LANG_VALUE) {
  // 获取当前语言
  const appStore = useAppStore();
  const {language} = storeToRefs(appStore);

  i18n.global.locale.value = lang; // 修改 i18n
  language.value = lang; // 修改 pinia
  localStorage.setItem(LANGUAGE, lang); // 修改缓存
}

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: {
    [LANG_VALUE.Zh]: zhHans,
    [LANG_VALUE.En]: en,
  },
  globalInjection: false,
});
export default i18n;
