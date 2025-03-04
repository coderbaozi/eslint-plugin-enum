import { ESLint } from 'eslint'
import { createEnumRule } from './rules'

const plugin: ESLint.Plugin = {
  meta: {
    name: 'enum-const',
  },
  rules: {
    'must-enum-const': createEnumRule(),
  },
  configs: {
    recommended: {
      rules: {
        'must-enum-const': 'error',
      },
    },
  },
}

export default plugin
