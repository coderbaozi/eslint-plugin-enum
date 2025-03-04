import type { Rule } from 'eslint'

function replaceEnumWithConstEnum(text: string): string {
  return text.replace('enum', 'const enum')
}

export function createEnumRule(): Rule.RuleModule {
  return {
    meta: {
      fixable: 'code',
    },
    create(context) {
      return {
        TSEnumDeclaration(node) {
          const isEnumConst = node.const

          if (isEnumConst) {
            return
          }

          context.report({
            node,
            message: 'Enum members should be const',
            fix: (fixer) => {
              const sourceCode = context.sourceCode
              const enumNode = sourceCode.getNodeByRangeIndex(node.range[0])
              if (!enumNode) {
                return null
              }
              const enumText = sourceCode.getText(enumNode)
              const constEnumText = replaceEnumWithConstEnum(enumText)
              return fixer.replaceText(enumNode, constEnumText)
            },
          })
        },
      }
    },
  }
}
