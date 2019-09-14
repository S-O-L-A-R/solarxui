import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color, select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Separator from '.'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

storiesOf('Separator', module).add('Separator', () => (
	<TesterBox width={text('Container width', '300px')}>
		<div>A</div>
		<Separator
			color={color('color', Separator.defaultProps.color)}
			thickness={text('thickness', Separator.defaultProps.thickness)}
			spacing={text('spacing', Separator.defaultProps.spacing)}
			variant={
				select(
					'variant',
					['vertical', 'horizontal'],
					Separator.defaultProps.variant,
				) as 'vertical' | 'horizontal'
			}
		/>
		<div>B</div>
	</TesterBox>
))
