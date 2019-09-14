import React, { HTMLAttributes } from 'react'
import UndoIcon from '../../icons/undo'
import CircleButton from '../'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

const UndoButton = ({ className, ...props }: Props) => {
	return (
		<CircleButton
			icon={UndoIcon}
			className={`danger-bg ${className}`}
			{...props}
		/>
	)
}

UndoButton.defaultProps = {
	size: 32,
}

export default UndoButton
