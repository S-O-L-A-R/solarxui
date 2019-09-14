import React, { StatelessComponent } from 'react'
import { SVGIconProps } from './types'

const Minus: StatelessComponent<SVGIconProps> = ({ size, ...props }) => (
	<svg
		fill="none"
		height={size}
		viewBox="0 0 8 8"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m7.05886 3.04761h-2.10648-1.90476-2.106477c-.517524 0-.941143.43466-.941143.95238 0 .51771.423619.95238.941143.95238h2.106477 1.90476 2.10648c.51752 0 .94114-.43467.94114-.95238 0-.51772-.42362-.95238-.94114-.95238z"
			fill="currentColor"
		/>
	</svg>
)

export default Minus
