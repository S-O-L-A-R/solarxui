import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Modal from '.'

const Wrapper = styled.div`
	padding: 24px;
`

const MockItem = styled.div`
	height: 500px;
`

storiesOf('Modal', module).add('Modal', () => (
	<div>
		<Modal isOpen={boolean('isOpen', false)}>
			<Wrapper>{text('children', 'This is very cool modal')}</Wrapper>
		</Modal>
		<MockItem>Mock Item</MockItem>
		<MockItem>Mock Item</MockItem>
	</div>
))
