import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { primary } from '../colors'

interface Props {
	className?: string
	height: number
	children: ReactNode | string
}

const StyledButton = styled.button`
	border-radius: 100px;
	height: ${(props: { height: number }) => props.height}px;
	width: 100%;
	background-color: ${primary};
	color: white;
	font-size: 20px;

	&:active,
	&:focus {
		outline: none;
		border: 0;
	}

	&.small {
		height: 24px;
		font-size: 16px;
	}

	&.large {
		height: 48px;
		font-size: 24px;
	}
`

function Button(props: Props) {
	return (
		<StyledButton
			className={`color-state highlight ${props.className}`}
			height={props.height}
		>
			{props.children}
		</StyledButton>
	)
}

Button.defaultProps = {
	height: 40,
}

export default Button
