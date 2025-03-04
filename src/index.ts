import { createEnumRule } from './rules'
import type { ESLint } from 'eslint'

const plugin: ESLint.Plugin = {
  meta: {
    name: 'enum-const',
  },
  rules: {
    'enum-const': createEnumRule(),
  },
  configs: {
    recommended: {
      rules: {
        'enum/enum-const': 'error',
      },
    },
  },
}

export default plugin
