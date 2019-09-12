import React, { ReactNode, HTMLAttributes } from 'react'
import { Container } from './styled'

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
}

const Card = ({ children, ...props }: Props) => (
	<Container {...props}>{children}</Container>
)

export default Card
