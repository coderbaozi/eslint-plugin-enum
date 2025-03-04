import { createEnumRule } from './rules'
import { EslintPluginConfig } from './types'

const plugin: EslintPluginConfig = {
  meta: {
    name: 'enum-const',
  },
  rules: {
    'enum-const': createEnumRule(),
  },
  configs: {
    recommended: {
      plugins: ['enum'],
      rules: {
        'enum/enum-const': 'error',
      },
    },
  },
}

export default plugin
