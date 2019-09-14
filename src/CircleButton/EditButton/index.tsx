import React, { HTMLAttributes } from 'react'
import EditIcon from '../../icons/edit'
import CircleButton from '../'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
}

const EditButton = ({ ...props }: Props) => {
	return <CircleButton icon={EditIcon} {...props} />
}

EditButton.defaultProps = {
	size: 32,
}

export default EditButton
