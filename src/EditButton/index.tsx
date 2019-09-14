import React, { HTMLAttributes, useMemo, StatelessComponent } from 'react'
import { Container } from './styled'
import EditIcon from '../icons/edit'
import { SVGIconProps } from '../icons/types'

interface Props extends HTMLAttributes<HTMLDivElement> {
	size: number
	icon: StatelessComponent<SVGIconProps>
}

const EditButton = ({ className, size, icon, ...props }: Props) => {
	const iconSize = useMemo(() => size / 2, [size])
	return (
		<Container {...props} size={size}>
			{icon({ size: iconSize })}
		</Container>
	)
}

EditButton.defaultProps = {
	size: 32,
	icon: EditIcon,
}

export default EditButton
