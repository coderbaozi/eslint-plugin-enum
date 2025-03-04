import { RuleTester } from 'eslint'
import { describe, it } from 'vitest'
import { createEnumRule } from '../rules'
import { invalidCase, validCase } from './testcase'

describe('const-enum', () => {
  it('should pass', async () => {
    const tester = new RuleTester({
      languageOptions: {
        parser: await import('@typescript-eslint/parser').then(
          (r) => r.default,
        ),
      },
    })
    tester.run('const-enum', createEnumRule(), {
      valid: validCase,
      invalid: invalidCase,
    })
  })
})
