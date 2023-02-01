import {defineStore} from 'pinia';
import {zhCN, dateZhCN} from 'naive-ui';
import {LANG_VALUE} from '@/common/enum';
import {getLanguage} from '@/lang';
import {getDarkMode} from '@/theme';

interface IAppState {
  language: string;
  darkMode: boolean;
  // ...
}

const useAppStore = defineStore('app', {
  state: (): IAppState => ({
    language: getLanguage(), // 默认值
    darkMode: getDarkMode(),
    // ...
  }),
  getters: {
    locale(state) {
      switch (state.language) {
        case LANG_VALUE.En:
          return null;
        case LANG_VALUE.Zh:
          return zhCN;
        default:
          break;
      }
    },
    dateLocale(state) {
      switch (state.language) {
        case LANG_VALUE.En:
          return null;
        case LANG_VALUE.Zh:
          return dateZhCN;
        default:
          break;
      }
    },
  },
  // ...
});

export default useAppStore;
