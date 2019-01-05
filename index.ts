import styled, { Interpolation, CSSObject } from '@emotion/styled'

const WorkingDivider = styled.hr({borderTopStyle: 'solid'})

/**
 * In object literals, only the keys are treated literally.
 * In this case, the value will be widened to type `string`.
 * Because of that, `baseStyles` does not match the first overload
 * defined by Emotion for `styled.hr` and TypeScript will think
 * your intention was to provide a template string as argument.
 */
const baseStyles = {borderTopStyle: 'solid'}
styled.hr(baseStyles)

/**
 * Telling TypeScript to treat the object literally would help.
 */
const literal: { borderTopStyle: 'solid' } = {borderTopStyle: 'solid'};
styled.hr(literal);

/**
 * This will also work because when a type definition is used,
 * TypeScript will try to match the provided object by treating it literally.
 */
const cssObject: CSSObject = {borderTopStyle: 'solid'};
styled.hr(cssObject);

/**
 * Or you can just pick a wider type that will still match the first overload.
 */
const interpolation: Interpolation = {borderTopStyle: 'solid'};
styled.hr(interpolation);

/**
 * Note: the following will not work! `baseStyles` is still just a `{ borderTopStyle: string }`
 */
const nope: Interpolation = baseStyles;
