module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    indent: [
      'error',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'linebreak-style': [
      'off',
      'unix'
    ],
    'no-unused-vars': ['off'],
    'no-plusplus': ['off'],
    'no-undef': ['off'],
    'max-len': ['off'],
    'space-before-function-paren': ['off'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1
      }
    ],
    'vue/require-default-prop': ['off'],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        ['template', 'render'],
        'renderError',
        'data',
        'name',
        'head',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'fetch',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'watch',
        'watchQuery'
      ]
    }],
    'vue/multi-word-component-names': ['off'],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }]
  },
  overrides: [
    {
      files: [
        '*.vue',
        'ruke'
      ],
      rules: {
        indent: 'off'
      }
    }
  ]
};
