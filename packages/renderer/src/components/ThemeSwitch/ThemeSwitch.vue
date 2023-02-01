<script setup lang="ts">
import {ref} from 'vue';
import {storeToRefs} from 'pinia';
import useAppStore from '@/stores/app';
import {NButton, NPopselect} from 'naive-ui';
import type {SelectOption, SelectGroupOption} from 'naive-ui';
import {setTheme} from '@/theme';
import {ThemeTypeMap, enumToArr} from '@/common/enum';

const appStore = useAppStore();
const {darkMode} = storeToRefs(appStore);
const value = ref<string>(getValue());
function getValue() {
  return darkMode.value ? 'dark' : 'light';
}
const options: Array<SelectOption | SelectGroupOption> = enumToArr(ThemeTypeMap);

function handleUpdateValue(value: string) {
  darkMode.value = value === 'dark';
  setTheme(darkMode.value);
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
        {{ ThemeTypeMap[value] }}
      </NButton>
      <!-- <n-icon>
        <Language />
      </n-icon> -->
    </NPopselect>
  </div>
</template>
