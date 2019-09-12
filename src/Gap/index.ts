import styled, { css } from 'styled-components'
import { GapProps } from './types'

export const horizontalStyle = css`
	display: flex;
	> *:not(:last-child) {
		${({ size }: GapProps) => css`
			margin-right: ${size};
		`};
	}
`

export const verticalStyle = css`
	align-items: center;
	> *:not(:last-child) {
		${({ size }: GapProps) => css`
			margin-bottom: ${size};
		`};
	}
`

export const gridStyle = css`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	${({ size }: GapProps) => css`
		margin: calc(-${size} / 2);
		> * {
			margin: calc(${size} / 2);
		}
	`};
`

const STYLE_MAPPER = {
	horizontal: horizontalStyle,
	vertical: verticalStyle,
	grid: gridStyle,
}

const Gap = styled.div`
	${({ type = 'horizontal' }: GapProps) => STYLE_MAPPER[type]};
`

export default Gap
