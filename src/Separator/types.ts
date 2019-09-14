import { HTMLAttributes } from 'react'

export enum Variant {
	VERTICAL = 'vertical',
	HORIZONTAL = 'horizontal',
}

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
	color: string
	thickness: string
	variant: 'vertical' | 'horizontal'
	spacing: string
}
