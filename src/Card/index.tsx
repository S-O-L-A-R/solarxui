import React, { ReactNode, HTMLAttributes } from 'react'
import { Container } from './styled'

const Card = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<Container {...props}>{children}</Container>
)

export default Card
