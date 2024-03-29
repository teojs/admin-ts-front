const path = require('node:path')
const createAliasSetting = require('@vue/eslint-config-standard/createAliasSetting')
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    NodeJS: true,
  },
  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`,
    }),
  },
  rules: {
    'no-console': process.env.mode === 'production' ? 1 : 0,
    'no-debugger': process.env.mode === 'production' ? 1 : 0,
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'no-unused-vars': ['warn'],
    'standard/computed-property-even-spacing': 0,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'head',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
          'filters',
          'computed',
          'watch',
        ],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/no-mutating-props': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/multi-word-component-names': 0,
  },
}
