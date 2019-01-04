import styled from '@emotion/styled'

const WorkingDivider = styled.hr({borderTopStyle: 'solid'})

const baseStyles = {borderTopStyle: 'solid'}
const NotWorkingDivider = styled.hr(baseStyles)

export {WorkingDivider, NotWorkingDivider}

