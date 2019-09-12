import React, { ReactNode, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { primary } from '../colors'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
	height: number
}

const StyledButton = styled.button`
	border-radius: 100px;
	height: ${(props: { height: number }) => props.height}px;
	width: 100%;
	background-color: ${primary};
	color: white;
	font-size: 20px;
	outline: none;
	border: 0;

	&.small {
		height: 24px;
		font-size: 16px;
	}

	&.large {
		height: 48px;
		font-size: 24px;
	}
`

function Button({ height, className, children, ...buttonProps }: Props) {
	return (
		<StyledButton
			className={`color-state highlight ${className}`}
			height={height}
			{...buttonProps}
		>
			{children}
		</StyledButton>
	)
}

Button.defaultProps = {
	height: 40,
}

export default Button
