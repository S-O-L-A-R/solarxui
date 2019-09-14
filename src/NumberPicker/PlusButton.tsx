import React, { HTMLAttributes } from 'react'
import PlusIcon from '../icons/plus'
import CircleButton from '../CircleButton'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

function PlusButton({ size, onClick }: Props) {
	return <CircleButton onClick={onClick} size={size} icon={PlusIcon} />
}

PlusButton.defaultProps = {
	size: 16,
}

export default PlusButton
