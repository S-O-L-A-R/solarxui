import React from 'react'
import { storiesOf } from '@storybook/react'
import * as colors from './'
import styled from 'styled-components'

import Shade from 'components/Shade'

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 4px;
`

function renderColorPalette() {
	return (
		<Container>
			{Object.keys(colors).map(paletteKey => {
				const palette = colors[paletteKey]
				if (typeof colors[paletteKey] === 'object') {
					return (
						<div key={paletteKey}>
							<Shade color={palette[500]}>{paletteKey}</Shade>
							<div>
								{Object.keys(palette).map(shadeKey => {
									const shade = palette[shadeKey]
									return (
										<Shade key={shadeKey} color={shade}>
											<span>{shadeKey}</span>
											<span>{shade}</span>
										</Shade>
									)
								})}
							</div>
						</div>
					)
				} else if (typeof colors[paletteKey] === 'string') {
					return (
						<Shade key={paletteKey} color={palette}>
							<span>{paletteKey}</span>
							<span>{palette}</span>
						</Shade>
					)
				}
				return null
			})}
		</Container>
	)
}

storiesOf('Colors', module).add('Colors', renderColorPalette)
