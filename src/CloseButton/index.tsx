import React from 'react'
import styled from 'styled-components'
import CloseIcon from './closeIcon'
import { gray } from '../colors'

const StyledCloseButton = styled.button`
	display: flex;
	justify-content: center;
	height: 32px;
	wight: 32px;
	border-radius: 50%;
	color: white;
	border: 1px solid ${gray[1]};
	outline: none;
`

function CloseButton() {
	return (
		<StyledCloseButton className="color-state">
			<CloseIcon />
		</StyledCloseButton>
	)
}

export default CloseButton
