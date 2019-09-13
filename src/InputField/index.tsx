import React, { HTMLAttributes } from 'react'
import { Container } from './styled'

export interface Props extends HTMLAttributes<HTMLInputElement> {
	placeholder: string
	className?: string
}

const InputField = ({ placeholder, className, ...props }: Props) => {
	return (
		<Container className={className}>
			<input className="highlight" placeholder={placeholder} {...props} />
		</Container>
	)
}

InputField.defaultProps = {
	placeholder: 'Menu Name...',
}

export default InputField
