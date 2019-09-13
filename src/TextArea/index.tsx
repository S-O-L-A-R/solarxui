import React, { HTMLAttributes } from 'react'
import { Container } from './styled'

export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
	placeholder: string
	className?: string
}

const TextArea = ({ placeholder, className, ...props }: Props) => {
	return (
		<Container className={`gray0-bg ${className}`}>
			<textarea className="highlight" placeholder={placeholder} {...props} />
		</Container>
	)
}

TextArea.defaultProps = {
	placeholder: 'Description...',
}

export default TextArea
