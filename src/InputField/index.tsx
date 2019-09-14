import React, { InputHTMLAttributes } from 'react'
import { Container } from './styled'

const InputField = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<Container className={`gray0-bg ${className}`}>
			<input className="highlight" {...props} />
		</Container>
	)
}

InputField.defaultProps = {
	placeholder: 'Menu Name...',
}

export default InputField
