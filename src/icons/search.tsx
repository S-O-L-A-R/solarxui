import React, { StatelessComponent } from 'react'
import { SVGIconProps } from './types'

const Search: StatelessComponent<SVGIconProps> = ({ size, ...props }) => (
	<svg
		height={size}
		viewBox="0 0 18 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17.4249 16.3951L13.1409 11.9395C14.2424 10.6301 14.8459 8.98262 14.8459 7.26749C14.8459 3.26026 11.5856 0 7.57841 0C3.57117 0 0.310913 3.26026 0.310913 7.26749C0.310913 11.2747 3.57117 14.535 7.57841 14.535C9.08278 14.535 10.5164 14.0812 11.742 13.2199L16.0586 17.7093C16.239 17.8967 16.4817 18 16.7418 18C16.9879 18 17.2214 17.9062 17.3987 17.7355C17.7753 17.3731 17.7873 16.7721 17.4249 16.3951ZM7.57841 1.89587C10.5404 1.89587 12.95 4.30552 12.95 7.26749C12.95 10.2295 10.5404 12.6391 7.57841 12.6391C4.61643 12.6391 2.20678 10.2295 2.20678 7.26749C2.20678 4.30552 4.61643 1.89587 7.57841 1.89587Z"
			fill="currentColor"
		/>
	</svg>
)

export default Search
