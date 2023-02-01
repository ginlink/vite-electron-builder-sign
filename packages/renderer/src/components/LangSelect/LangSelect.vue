<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import useAppStore from '@/stores/app';
import {LANG_VALUE} from '@/common/enum';
import {NButton, NPopselect} from 'naive-ui';
import type {SelectOption, SelectGroupOption} from 'naive-ui';
import {setLocale} from '@/lang';

const ENGLISH = 'English';
const ZHONG_WEN = '中文';
// 获取当前语言
const appStore = useAppStore();
const {language} = storeToRefs(appStore);
// 弹出选择 Popselect
type valueType = string | null;
const value = ref<valueType>(getValue());
function getValue() {
  switch (language.value) {
    case LANG_VALUE.En:
      return ENGLISH;
    case LANG_VALUE.Zh:
      return ZHONG_WEN;
    default:
      return ZHONG_WEN;
  }
}
const options: Array<SelectOption | SelectGroupOption> = [
  {
    label: ENGLISH,
    value: ENGLISH,
  },
  {
    label: ZHONG_WEN,
    value: ZHONG_WEN,
  },
];

let lang: LANG_VALUE;
function handleUpdateValue(value: valueType) {
  switch (value) {
    case ENGLISH:
      lang = LANG_VALUE.En;
      break;
    case ZHONG_WEN:
      lang = LANG_VALUE.Zh;
      break;
    default:
      break;
  }
  setLocale(lang);
}
</script>

<template>
  <div class="lang-select">
    <NPopselect
      v-model:value="value"
      :options="options"
      trigger="click"
      @update:value="handleUpdateValue"
    >
      <NButton>
        {{ value }}
      </NButton>
      <!-- <n-icon>
        <Language />
      </n-icon> -->
    </NPopselect>
  </div>
</template>
