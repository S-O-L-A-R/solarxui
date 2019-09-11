import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Modal from '.'

const Wrapper = styled.div`
	padding: 24px;
`

storiesOf('Modal', module).add('Modal', () => (
	<Modal isOpen={boolean('isOpen', false)}>
		<Wrapper>{text('children', 'This is very cool modal')}</Wrapper>
	</Modal>
))
