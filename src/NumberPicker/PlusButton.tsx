import React, { HTMLAttributes } from 'react'
import PlusIcon from './PlusIcon'
import CircleButton from '../CircleButton'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

function PlusButton({ size, onClick }: Props) {
	return (
		<CircleButton onClick={onClick} size={size}>
			<PlusIcon />
		</CircleButton>
	)
}

PlusButton.defaultProps = {
	size: 16,
}

export default PlusButton
