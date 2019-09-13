import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Card from '.'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

storiesOf('Card', module).add('Card', () => (
	<TesterBox width={text('Container width', '300px')}>
		<Card>
			<div>Example Content</div>
		</Card>
	</TesterBox>
))
