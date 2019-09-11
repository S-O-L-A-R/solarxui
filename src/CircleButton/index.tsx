import React, { ReactNode, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { primary } from '../colors'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

const StyledCircleButton = styled.button`
	border-radius: 50%;
	background-color: ${primary};
	color: white;
	min-height: 32px;
	min-width: 32px;
	height: ${(props: { size: number }) => props.size}px;
	width: ${(props: { size: number }) => props.size}px;
	outline: none;
	border: 0;
`

function CircleButton({ className, size, children, ...buttonProps }: Props) {
	return (
		<StyledCircleButton
			className={`color-state highlight ${className}`}
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
