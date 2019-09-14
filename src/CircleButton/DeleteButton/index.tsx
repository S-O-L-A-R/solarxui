import React, { HTMLAttributes } from 'react'
import DeleteIcon from '../../icons/delete'
import CircleButton from '../'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

const DeleteButton = ({ className, ...props }: Props) => {
	return (
		<CircleButton
			icon={DeleteIcon}
			className={`danger-bg ${className}`}
			{...props}
		/>
	)
}

DeleteButton.defaultProps = {
	size: 32,
}

export default DeleteButton
