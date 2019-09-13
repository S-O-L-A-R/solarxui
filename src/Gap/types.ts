import { ReactNode, HTMLAttributes } from 'react'

export interface GapProps extends HTMLAttributes<HTMLDivElement> {
	size: string
	children: ReactNode
	type?: 'vertical' | 'horizontal' | 'grid'
	className?: string
}
