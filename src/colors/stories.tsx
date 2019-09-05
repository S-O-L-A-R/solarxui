import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import styled, { css } from 'styled-components'
import { primary, danger, gray } from '.'

const Color = styled.div`
	width: 100vw;
	height: 100vh;
	${({ color }: { color: string }) => css`
		background: ${color};
	`}
`

storiesOf('Style', module).add('colors', () => (
	<Color
		color={select(
			'color',
			{ primary, danger, 'gray[1]': gray[1], 'gray[2]': gray[2] },
			primary,
		)}
	/>
))
