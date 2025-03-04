import { ESLint } from 'eslint'
import { createEnumRule } from './rules'

const plugin: ESLint.Plugin = {
  meta: {
    name: 'enum-const',
  },
  rules: {
    'must-enum-const': createEnumRule(),
  },
}

export default plugin
