import React, { HTMLAttributes } from 'react'
import MinusIcon from './MinusIcon'
import CircleButton from '../CircleButton'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

function MinusButton({ size, onClick }: Props) {
	return (
		<CircleButton onClick={onClick} size={size}>
			<MinusIcon />
		</CircleButton>
	)
}

MinusButton.defaultProps = {
	size: 16,
}

export default MinusButton
