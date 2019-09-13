import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Input from '.'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

storiesOf('Input', module).add('Input', () => (
	<TesterBox width={text('Container width', '300px')}>
		<Input
			className={text('className', '')}
			placeholder={text('placeholder', Input.defaultProps.placeholder)}
		/>
	</TesterBox>
))
