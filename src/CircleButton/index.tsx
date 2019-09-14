import React, { HTMLAttributes } from 'react'
import { StyledCircleButton } from './styled'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

function CircleButton({ className, size, children, ...buttonProps }: Props) {
	return (
		<StyledCircleButton
			className={`color-state highlight ${!!className ? className : ''}`}
			size={size}
			{...buttonProps}
		>
			{children}
		</StyledCircleButton>
	)
}

CircleButton.defaultProps = {
	size: 32,
}

export default CircleButton
