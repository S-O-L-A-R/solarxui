import React, { HTMLAttributes } from 'react'
import MinusIcon from '../../icons/minus'
import CircleButton from '../'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

function PlusButton({ size, onClick }: Props) {
	return <CircleButton onClick={onClick} size={size} icon={MinusIcon} />
}

PlusButton.defaultProps = {
	size: 16,
}

export default PlusButton
