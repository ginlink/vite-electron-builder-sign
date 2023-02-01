export enum LANG_VALUE {
  En = 'en',
  Zh = 'zh-Hans',
}

export enum ThemeType {
  白天 = 'light',
  黑夜 = 'dark',
}
export const ThemeTypeMap: {[key: string | number]: any} = {
  light: '白天',
  dark: '黑夜',
};

/**
 * 枚举转数组的方法
 * @param enumValue枚举值 必填
 * @param stateArr选择枚举的数组 非必填
 * @return [{value: '', label: ''}]
 */
export function enumToArr(enumValue: any, stateArr: any[] = []) {
  const keysArr = Object.keys(enumValue);
  // keysArr.splice(0, keysArr.length / 2);
  let arrayObjects: any[] = [];
  if (stateArr && stateArr.length) {
    stateArr.forEach(item => {
      arrayObjects.push({
        value: item,
        label: enumValue[item],
      });
    });
  } else {
    arrayObjects = keysArr.map(item => ({
      value: item,
      label: enumValue[item],
    }));
  }
  return arrayObjects;
}
