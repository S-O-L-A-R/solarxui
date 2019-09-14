import React, { TextareaHTMLAttributes } from 'react'
import { Container } from './styled'

const TextArea = ({
	className,
	...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<Container className={`gray0-bg ${className}`}>
			<textarea className="highlight" {...props} />
		</Container>
	)
}

TextArea.defaultProps = {
	placeholder: 'Description...',
}

export default TextArea
