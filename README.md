This is a weird issue and I don't know what's going on. Help appreciated!

Here's the code:

```typescript
import styled from '@emotion/styled'

const WorkingDivider = styled.hr({borderTopStyle: 'solid'})

const baseStyles = {borderTopStyle: 'solid'}
const NotWorkingDivider = styled.hr(baseStyles)

const otherBaseStyles = {margin: 20}
const AnotherWorkingDivider = styled.hr(otherBaseStyles)

export {WorkingDivider, NotWorkingDivider, AnotherWorkingDivider}
```


Here's the error I'm getting:

```
$ yarn typecheck
yarn run v1.12.3
$ tsc
index.ts:6:37 - error TS2345: Argument of type '{ borderTopStyle: string; }' is not assignable to parameter of type 'TemplateStringsArray'.
  Type '{ borderTopStyle: string; }' is missing the following properties from type 'TemplateStringsArray': raw, length, concat, join, and 10 more.

6 const NotWorkingDivider = styled.hr(baseStyles)
                                      ~~~~~~~~~~


Found 1 error.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

So from my observations, when I specify `borderTopStyle` in an object and pass it to styled, it'll fail typechecking with the above error. But if I inline the object it works. I have not observed this behavior with any other css property.
