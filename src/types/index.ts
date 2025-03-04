import type { ESLint } from 'eslint'

export interface EslintPluginConfig extends ESLint.Plugin {
  configs: {
    recommended: {
      plugins: ['enum']
      rules: {
        'enum/enum-const': 'error'
      }
    }
  }
}
