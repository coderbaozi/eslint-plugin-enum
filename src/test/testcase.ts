export const validCase = [
  {
    code: 'export const enum Foo {}',
  },
]

export const invalidCase = [
  {
    code: 'export enum Bar {}',
    output: 'export const enum Bar {}',
    errors: 1,
  },
]
