import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import SearchBox from './'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

storiesOf('Components', module).add('SearchBox', () => (
	<TesterBox width={text('Container width', '300px')}>
		<SearchBox
			className={text('className', '')}
			placeholder={text('placeholder', SearchBox.defaultProps.placeholder)}
		/>
	</TesterBox>
))
