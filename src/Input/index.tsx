import React, { HTMLAttributes } from 'react'
import { Container } from './styled'

export interface Props extends HTMLAttributes<HTMLInputElement> {
	placeholder: string
	className?: string
}

const Input = ({ placeholder, className, ...props }: Props) => {
	return (
		<Container className={className}>
			<input
				className="highlight gray2-text"
				placeholder={placeholder}
				{...props}
			/>
		</Container>
	)
}

Input.defaultProps = {
	placeholder: 'Menu Name...',
}

export default Input
