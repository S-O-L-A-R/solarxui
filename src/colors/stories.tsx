import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import styled, { css } from 'styled-components'
import { primary, danger, gray } from '.'

const Color = styled(
	({ color, className }: { color: string; className?: string }) => (
		<div className={className}>{color}</div>
	),
)`
	width: 100vw;
	height: 100vh;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ color }: { color: string }) => css`
		background: ${color};
	`};
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
