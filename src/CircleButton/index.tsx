import React, { HTMLAttributes, useMemo, StatelessComponent } from 'react'
import { Container } from './styled'
import EditIcon from '../icons/edit'
import { SVGIconProps } from '../icons/types'

interface Props extends HTMLAttributes<HTMLButtonElement> {
	size: number
	icon: StatelessComponent<SVGIconProps>
}

const CircleButton = ({ className, size, icon, ...props }: Props) => {
	const iconSize = useMemo(() => size / 2, [size])
	return (
		<Container {...props} size={size} className={`primary-bg ${className}`}>
			{icon({ size: iconSize })}
		</Container>
	)
}

CircleButton.defaultProps = {
	size: 32,
	icon: EditIcon,
}

export default CircleButton
