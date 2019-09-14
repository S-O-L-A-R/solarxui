import styled, { css } from 'styled-components'
import { SeparatorProps, Variant } from './types'

const variantStyle = ({
	thickness,
	color,
	spacing = '0px',
}: {
	thickness: string
	color: string
	spacing?: string
}) => ({
	[Variant.VERTICAL]: css`
		display: inline-flex;
		border-left: ${thickness} solid ${color};
		margin: 0 ${spacing};
		height: 100%;
	`,
	[Variant.HORIZONTAL]: css`
		border-top: ${thickness} solid ${color};
		margin: ${spacing} 0;
		width: 100%;
	`,
})

function applyStyles(props: SeparatorProps) {
	const { variant, ...rest } = props
	return variantStyle({ ...rest })[variant]
}

export const StyledSeparator = styled.div`
	${applyStyles};
`
