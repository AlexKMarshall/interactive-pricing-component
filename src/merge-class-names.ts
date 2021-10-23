export function mergeClassNames(...args: any[]): string {
  const classList = args.reduce(
    (classNames, arg) => classNames.concat(arg),
    []
  ) as unknown[]

  return classList
    .filter((className) => typeof className === 'string')
    .join(' ')
}
