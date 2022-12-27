// .eslintrc.js
module.exports = {
    // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
    // root: true,
    // 추가적인 규칙들을 적용
    env: {
    //   node: true,
    },
    parserOptions: {
      parser: "babel-eslint",
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/essential",
      "prettier",
      "plugin:prettier/recommended",
    ],
    // 코드 정리 플러그인 추가
    plugins: ["prettier"],
    // 사용자 편의 규칙 추가
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/multi-word-component-names": ["error", {
        "ignores": ["a"]
        }]
    },
  };