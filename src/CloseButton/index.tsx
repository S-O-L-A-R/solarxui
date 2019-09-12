import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import CloseIcon from './closeIcon'
import { gray } from '../colors'

const StyledCloseButton = styled.button`
	display: flex;
	justify-content: center;
	height: 32px;
	width: 32px;
	border-radius: 50%;
	color: ${gray[1]};
	border: 1px solid ${gray[1]};
	outline: none;
`

function CloseButton(props: HTMLAttributes<HTMLButtonElement>) {
	return (
		<StyledCloseButton className="color-state" {...props}>
			<CloseIcon />
		</StyledCloseButton>
	)
}

export default CloseButton
