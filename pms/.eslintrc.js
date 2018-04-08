// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js',
      },
    },
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    // 'import/extensions': ['error', 'always', {
    //   'js': 'never',
    //   'vue': 'never',
    // }],
    'import/extensions': 0,
    'linebreak-style': 0,
    'max-depth': [0, 8],
    'max-len': [0, 200],
    'no-console': 0,
    'quote-props': 0,
<<<<<<< HEAD
    'no-underscore-dangle': 0,
=======
    'no-param-reassign': 0,
>>>>>>> 5010d4954a9d6b1a7c075feb9d053603713d82ff
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js'],
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
