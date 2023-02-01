<script lang="ts" setup>
import ReactiveCounter from '@/components/ReactiveCounter.vue';
import ReactiveHash from '@/components/ReactiveHash.vue';
import ElectronVersions from '@/components/ElectronVersions.vue';
import {NButton} from 'naive-ui';
import {darkTheme} from 'naive-ui';
import {NConfigProvider, NGlobalStyle} from 'naive-ui';
import {NThemeEditor} from 'naive-ui';
import {useI18n} from 'vue-i18n';
import {getNameLangInTs} from './utils/test';
const {t} = useI18n();

const name = t('name');
const name3 = getNameLangInTs();

const APP_VERSION = import.meta.env.VITE_APP_VERSION;
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NGlobalStyle />
    <NThemeEditor>
      <!-- 国际化 -->
      <div>{{ name }}</div>
      <div>{{ t('name2') }}</div>
      <div>{{ name3 }}</div>

      <img
        alt="Vue logo"
        src="../assets/logo.svg"
        width="150"
      />

      <p>
        <!-- Example how to inject current app version to UI -->
        App version: {{ APP_VERSION }}
      </p>

      <div>
        <NButton type="primary">naive-ui</NButton>
      </div>

      <p>
        For a guide and recipes on how to configure / customize this project,<br />
        check out the
        <a
          href="https://github.com/cawa-93/vite-electron-builder"
          target="_blank"
        >
          vite-electron-builder documentation
        </a>
        .
      </p>

      <fieldset>
        <legend>Test Vue Reactivity</legend>
        <reactive-counter />
      </fieldset>

      <fieldset>
        <legend>Test Node.js API</legend>
        <reactive-hash />
      </fieldset>

      <fieldset>
        <legend>Environment</legend>
        <electron-versions />
      </fieldset>

      <p>
        Edit
        <code>packages/renderer/src/App.vue</code> to test hot module replacement.
      </p>
    </NThemeEditor>
  </NConfigProvider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 700px;
}

fieldset {
  margin: 2rem;
  padding: 1rem;
}
</style>
