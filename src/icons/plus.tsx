import React, { StatelessComponent } from 'react'
import { SVGIconProps } from './types'

const Plus: StatelessComponent<SVGIconProps> = ({ size, ...props }) => (
	<svg
		fill="none"
		height={size}
		viewBox="0 0 8 8"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m7.28571 3.28571h-2.42857c-.07889 0-.14285-.06396-.14285-.14285v-2.428574c0-.394462-.31983-.714286-.71429-.714286s-.71429.319824-.71429.714286v2.428574c0 .07889-.06396.14285-.14285.14285h-2.428574c-.394462 0-.714286.31983-.714286.71429s.319824.71429.714286.71429h2.428574c.07889 0 .14285.06396.14285.14285v2.42857c0 .39447.31983.71429.71429.71429s.71429-.31982.71429-.71429v-2.42857c0-.07889.06396-.14285.14285-.14285h2.42857c.39447 0 .71429-.31983.71429-.71429s-.31982-.71429-.71429-.71429z"
			fill="currentColor"
		/>
	</svg>
)

export default Plus
