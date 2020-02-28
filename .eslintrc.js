module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
    // jQuery: false,
    // $: false
  },
  rules: {
    // 这里填入你的项目需要的个性化配置
  },
  settings: {
    react: {
      version: "latest" // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    }
  }
};