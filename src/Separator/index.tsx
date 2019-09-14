import React from 'react'
import { gray } from '../colors'
import { SeparatorProps } from './types'
import { StyledSeparator } from './styled'

const Separator = ({
	color,
	thickness,
	spacing,
	variant,
	...props
}: SeparatorProps) => (
	<StyledSeparator
		color={color}
		thickness={thickness}
		spacing={spacing}
		variant={variant}
		{...props}
	/>
)

Separator.defaultProps = {
	color: gray[0],
	thickness: '1px',
	variant: 'horizontal',
	spacing: '16px',
}

export default Separator
