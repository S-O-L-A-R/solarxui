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
`

storiesOf('Components', module).add('SearchBox', () => (
	<TesterBox>
		<SearchBox
			className={text('className', '')}
			placeholder={text('placeholder', SearchBox.defaultProps.placeholder)}
			width={text('width', SearchBox.defaultProps.width)}
		/>
	</TesterBox>
))
