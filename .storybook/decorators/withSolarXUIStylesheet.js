import React, { Fragment } from 'react'
import SolarXUIStylesheet from '../../src/SolarXUIStylesheet'

export default function withSolarXUIStylesheet(storyFn: () => void) {
	return (
		<Fragment>
			<SolarXUIStylesheet />
			{storyFn()}
		</Fragment>
	)
}
