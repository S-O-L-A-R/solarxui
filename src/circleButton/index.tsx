import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { primary } from '../colors'

interface Props {
	className?: string
	size: number
	children?: ReactNode
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

function CircleButton(props: Props) {
	return (
		<StyledCircleButton
			className={`color-state highlight ${props.className}`}
			size={props.size}
		>
			{props.children}
		</StyledCircleButton>
	)
}

CircleButton.defaultProps = {
	size: 32,
}

export default CircleButton
