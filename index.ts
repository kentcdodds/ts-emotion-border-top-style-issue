import styled from '@emotion/styled'

const WorkingDivider = styled.hr({borderTopStyle: 'solid'})

const baseStyles = {borderTopStyle: 'solid'}
const NotWorkingDivider = styled.hr(baseStyles)

const otherBaseStyles = {margin: 20}
const AnotherWorkingDivider = styled.hr(otherBaseStyles)

export {WorkingDivider, NotWorkingDivider, AnotherWorkingDivider}

