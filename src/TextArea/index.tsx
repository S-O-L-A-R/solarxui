import React, { HTMLAttributes } from 'react'
import { Container } from './styled'

const TextArea = ({
	className,
	...props
}: HTMLAttributes<HTMLTextAreaElement>) => {
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
