import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import InputField from '.'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

storiesOf('Input', module).add('InputField', () => (
	<TesterBox width={text('Container width', '300px')}>
		<InputField
			className={text('className', '')}
			placeholder={text('placeholder', InputField.defaultProps.placeholder)}
		/>
	</TesterBox>
))
