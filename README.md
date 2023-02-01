# vite-elector-builder

### 架构

[Electron22](https://www.electronjs.org/zh/docs/latest/) + [vite4](https://cn.vitejs.dev/guide/#trying-vite-online) + [vue3](https://v3.ja.vuejs.org/) + [naiveUI2](https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme)

### 开发

> ！使用 npm9 包管理器
>
> ```sh
> # 升级npm
> npm install npm -g
> ```

```sh
# 1.依赖
npm install

# 2.启动，并进入观测模式
npm run watch

# 3.开发
```

**问题1**：安装 `playwright` 时，由于网络原因可能无法下载firfox、chrome等浏览器。

解决：使用代理 

### 构建

分为三个包main，preload，renderer，通过 `vite` 构建。

最终构建为应用程序，通过 [electron-builder](https://www.electron.build/icons) 构建，配置见 `/.electron-builder.config.js` 。

### 提交代码

代码提交前eslint修复代码以及类型检查

> ！vscode快捷提交无法运行命令行（环境问题），需要在命令行中提交
>
> ![image-20230201200746968](https://cdn.gincool.com/img/image-20230201200746968.png)

### 国际化

通过 [vue-i18n-next](https://github.com/intlify/vue-i18n-next) 国际化，状态管理器 [pinia](https://pinia.vuejs.org/getting-started.html) 切换

### 换肤

通过 [naive](https://www.naiveui.com/zh-CN/os-theme/docs/customize-theme) 配置主题，状态管理器 [pinia](https://pinia.vuejs.org/getting-started.html) 切换

